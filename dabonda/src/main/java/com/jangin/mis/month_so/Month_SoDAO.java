package com.jangin.mis.month_so;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Month_SoDAO {
	private ConnectDB db;

	public List<Month_SoVO> selectMonth_So(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SO_01 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_SoVO> list = new ArrayList<Month_SoVO>();
		Month_SoVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_SoVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setCurr_amt(db.rs().getDouble("CURR_AMT"));
				vo.setRslt_amt(db.rs().getDouble("RSLT_AMT"));
				vo.setAmt_percent(db.rs().getDouble("AMT_PERCENT"));
				vo.setSep(db.rs().getString("sep"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Month_So_DtlVO> selectMonth_So_Dtl(String date, String province_cd) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SO_DTL_01 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', '");
		sql.append(province_cd);
		sql.append("', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_So_DtlVO> list = new ArrayList<Month_So_DtlVO>();
		Month_So_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_So_DtlVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setBp_cd(db.rs().getString("BP_CD"));
				vo.setBp_nm(db.rs().getString("BP_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setCurr_amt(db.rs().getDouble("CURR_AMT"));
				vo.setRslt_amt(db.rs().getDouble("RSLT_AMT"));
				vo.setAmt_percent(db.rs().getDouble("AMT_PERCENT"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
}
