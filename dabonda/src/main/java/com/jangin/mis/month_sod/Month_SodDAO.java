package com.jangin.mis.month_sod;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Month_SodDAO {
	private ConnectDB db;

	public List<Month_SodVO> selectMonth_Sod(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_S_MONTH_SO_AMT_F005 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_SodVO> list = new ArrayList<Month_SodVO>();
		Month_SodVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_SodVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setCurr_amt(db.rs().getDouble("CURR_AMT"));
				vo.setRslt_amt(db.rs().getDouble("RSLT_AMT"));
				vo.setAmt_percent(db.rs().getDouble("AMT_PERCENT"));
				vo.setSep_cd(db.rs().getString("SEP_CD"));
				vo.setDel_amt(db.rs().getDouble("DEL_AMT"));
				vo.setReal_amt(db.rs().getDouble("REAL_AMT"));
				vo.setReal_percent(db.rs().getDouble("REAL_PERCENT"));
				vo.setPre_del_amt(db.rs().getDouble("PRE_DEL_AMT"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Month_Sod_DtlVO> selectMonth_Sod_Dtl(String date, String province_cd) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_S_MONTH_SO_AMT_F003 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', '");
		sql.append(province_cd);
		sql.append("', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_Sod_DtlVO> list = new ArrayList<Month_Sod_DtlVO>();
		Month_Sod_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_Sod_DtlVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setBp_cd(db.rs().getString("BP_CD"));
				vo.setBp_nm(db.rs().getString("BP_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setCurr_amt(db.rs().getDouble("CURR_AMT"));
				vo.setRslt_amt(db.rs().getDouble("RSLT_AMT"));
				vo.setDel_amt(db.rs().getDouble("DEL_AMT"));
				vo.setReal_amt(db.rs().getDouble("REAL_AMT"));
				vo.setReal_percent(db.rs().getDouble("REAL_PERCENT"));
				vo.setPre_del_amt(db.rs().getDouble("PRE_DEL_AMT"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
}
