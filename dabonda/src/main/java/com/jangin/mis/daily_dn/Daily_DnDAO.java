package com.jangin.mis.daily_dn;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Daily_DnDAO {
	private ConnectDB db;
	
	public List<Daily_DnVO> getDaily_Dn(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_DAILY_DN @DATE='");
		sql.append(date);
		sql.append("' ");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		
		List<Daily_DnVO> list = new ArrayList<Daily_DnVO>();
		Daily_DnVO vo;

		try {
			while (db.rs().next()) {
				vo = new Daily_DnVO();
				vo.setSeq(db.rs().getInt("SEQ"));
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
				vo.setMonth_amt(db.rs().getFloat("MONTH_AMT"));
				vo.setCom_amt(db.rs().getFloat("COM_AMT"));
				vo.setNo_amt(db.rs().getFloat("NO_AMT"));
				vo.setSum_amt(db.rs().getFloat("SUM_AMT"));
				vo.setRate(db.rs().getString("RATE"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Daily_Dn_DtlVO> getDaily_Dn_Dtl(String date, String province_cd) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_DAILY_DN_DTL @DATE='");
		sql.append(date);
		sql.append("', @PROVINCE_CD='");
		sql.append(province_cd);
		sql.append("' ");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		
		List<Daily_Dn_DtlVO> list = new ArrayList<Daily_Dn_DtlVO>();
		Daily_Dn_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Daily_Dn_DtlVO();
				vo.setBp_cd(db.rs().getString("BP_CD"));
				vo.setBp_nm(db.rs().getString("BP_NM"));
				vo.setMonth_amt(db.rs().getFloat("MONTH_AMT"));
				vo.setCom_amt(db.rs().getFloat("COM_AMT"));
				vo.setNo_amt(db.rs().getFloat("NO_AMT"));
				vo.setSum_amt(db.rs().getFloat("SUM_AMT"));
				vo.setRate(db.rs().getString("RATE"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
}
