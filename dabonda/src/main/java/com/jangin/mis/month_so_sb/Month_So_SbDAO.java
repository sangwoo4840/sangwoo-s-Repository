package com.jangin.mis.month_so_sb;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Month_So_SbDAO {
	private ConnectDB db;

	public List<Month_So_SbVO> selectMonth_So_Sb(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SO_01 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', 'Y'");
		db.accessDB(ConnectDB.JANGIN_SB, "procedure", sql.toString());
		List<Month_So_SbVO> list = new ArrayList<Month_So_SbVO>();
		Month_So_SbVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_So_SbVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
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
	
	public List<Month_So_Sb_DtlVO> selectMonth_So_Sb_Dtl(String date, String province_cd) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SO_DTL_01 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', '");
		sql.append(province_cd);
		sql.append("', 'Y'");
		db.accessDB(ConnectDB.JANGIN_SB, "procedure", sql.toString());
		List<Month_So_Sb_DtlVO> list = new ArrayList<Month_So_Sb_DtlVO>();
		Month_So_Sb_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_So_Sb_DtlVO();
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
