package com.jangin.wow2d.car;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class CarDAO {
	private ConnectDB db;

	public List<CarVO> selectCar(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("jangin2.usp_ord301f_List_New_WEB '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<CarVO> list = new ArrayList<CarVO>();
		CarVO vo;

		try {
			while (db.rs().next()) {
				vo = new CarVO();
				vo.setCar_no(db.rs().getString("car_no"));
				vo.setTeam_no(db.rs().getString("team_no"));
				vo.setAmpm(db.rs().getString("AMPM"));
				vo.setTran_size(db.rs().getInt("tran_size"));
				vo.setCar_size(db.rs().getInt("car_size"));
				vo.setDeadline(db.rs().getString("deadline"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
}
