package com.jangin.mis.month_sales;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Month_SalesDAO {
	private ConnectDB db;

	public List<Month_SalesVO> selectMonth_Sales(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SALES_02 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_SalesVO> list = new ArrayList<Month_SalesVO>();
		Month_SalesVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_SalesVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setCurr_amt(db.rs().getDouble("CURR_AMT"));
				vo.setRslt_amt(db.rs().getDouble("RSLT_AMT"));
				vo.setAmt_percent(db.rs().getDouble("AMT_PERCENT"));
				vo.setSep_cd(db.rs().getString("sep_cd"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Month_Sales_DtlVO> selectMonth_Sales_Dtl(String date, String province_cd) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_MONTH_SALES_DTL_02 '11', '");
		sql.append(date);
		sql.append("' ,'%', '%', '");
		sql.append(province_cd);
		sql.append("', 'Y'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Month_Sales_DtlVO> list = new ArrayList<Month_Sales_DtlVO>();
		Month_Sales_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Month_Sales_DtlVO();
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
