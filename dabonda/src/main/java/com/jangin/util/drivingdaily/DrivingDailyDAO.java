package com.jangin.util.drivingdaily;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class DrivingDailyDAO {
	private ConnectDB db;

	public DrivingDailyVO getDrivingdaily(String email, String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_DRIVING_DAILY '");
		sql.append(email);
		sql.append("', '");
		sql.append(date);
		sql.append("' ");
		
		DrivingDailyVO vo;

		try {
			db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
			
			db.rs().next();
			vo = new DrivingDailyVO();
			vo.setModel(db.rs().getString("MODEL"));
			vo.setNumber(db.rs().getString("NUMBER"));
			vo.setBefore_mileage(db.rs().getInt("BEFORE_MILEAGE"));
			vo.setAfter_mileage(db.rs().getInt("AFTER_MILEAGE"));
			vo.setTotal_mileage(db.rs().getInt("TOTAL_MILEAGE"));
			vo.setCommute(db.rs().getInt("COMMUTE"));
			vo.setBusiness(db.rs().getInt("BUSINESS"));
			vo.setRemark(db.rs().getString("REMARK"));
		} catch (Exception e) {
			db.closeDB();
			return null;
		}
		db.closeDB();

		return vo;
	}
	
	public List<DrivingDailyVO> getDrivingdailyList(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 top 5 convert(varchar(10), DATE, 121) as DATE, BEFORE_MILEAGE, AFTER_MILEAGE ");
		sql.append("from	 DRIVING_DAILY ");
		sql.append("where	 EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("order by DATE desc ");
		
		List<DrivingDailyVO> list = new ArrayList<DrivingDailyVO>();
		DrivingDailyVO vo;

		try {
			db.accessDB(ConnectDB.JANGIN_HQ, "select", sql.toString());
			
			while (db.rs().next()) {
				vo = new DrivingDailyVO();
				vo.setDate(db.rs().getString("DATE"));
				vo.setBefore_mileage(db.rs().getInt("BEFORE_MILEAGE"));
				vo.setAfter_mileage(db.rs().getInt("AFTER_MILEAGE"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
			db.closeDB();
			return null;
		}
		db.closeDB();

		return list;
	}
	
	public boolean setDrivingdaily(String email, String date, DrivingDailyVO vo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_SET_DRIVING_DAILY '");
		sql.append(email);
		sql.append("', '");
		sql.append(date);
		sql.append("', '");
		sql.append(vo.getModel());
		sql.append("', '");
		sql.append(vo.getNumber());
		sql.append("', ");
		sql.append(vo.getBefore_mileage());
		sql.append(", ");
		sql.append(vo.getAfter_mileage());
		sql.append(", ");
		sql.append(vo.getTotal_mileage());
		sql.append(", ");
		sql.append(vo.getCommute());
		sql.append(", ");
		sql.append(vo.getBusiness());
		sql.append(", '");
		sql.append(vo.getRemark());
		sql.append("' ");
		
		try {
			db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		} catch (Exception e) {
			e.printStackTrace();
			db.closeDB();
			return false;
		}
		db.closeDB();
		
		return true;
	}
}