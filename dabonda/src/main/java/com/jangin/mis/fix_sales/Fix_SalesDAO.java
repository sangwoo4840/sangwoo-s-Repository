package com.jangin.mis.fix_sales;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class Fix_SalesDAO {
	private ConnectDB db;

	public List<Fix_SalesVO> selectFix_Sales(String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_SALES_003_new '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Fix_SalesVO> list = new ArrayList<Fix_SalesVO>();
		Fix_SalesVO vo;

		try {
			while (db.rs().next()) {
				vo = new Fix_SalesVO();
				vo.setProvince_cd(db.rs().getString("PROVINCE_CD"));
				vo.setProvince_nm(db.rs().getString("PROVINCE_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setAmt1(db.rs().getDouble("AMT1"));
				vo.setAmt2(db.rs().getDouble("AMT2"));
				vo.setAmt3(db.rs().getDouble("AMT3"));
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
	
	public List<Fix_SalesVO> selectFix_Sales_sub() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_SALES_003_NEXTMONTH");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Fix_SalesVO> list = new ArrayList<Fix_SalesVO>();
		Fix_SalesVO vo;

		try {
			while (db.rs().next()) {
				vo = new Fix_SalesVO();
				vo.setBiz_area(db.rs().getString("biz_area"));
				vo.setAmt2(db.rs().getDouble("amt2"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Fix_Sales_DtlVO> selectFix_Sales_Dtl(String province_cd, String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_SALES_DTL_003_NEW '");
		sql.append(province_cd);
		sql.append("', '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Fix_Sales_DtlVO> list = new ArrayList<Fix_Sales_DtlVO>();
		Fix_Sales_DtlVO vo;

		try {
			while (db.rs().next()) {
				vo = new Fix_Sales_DtlVO();
				vo.setBp_cd(db.rs().getString("BP_CD"));
				vo.setBp_nm(db.rs().getString("BP_NM"));
				vo.setPlan_amt(db.rs().getDouble("PLAN_AMT"));
				vo.setAmt1(db.rs().getDouble("AMT1"));
				vo.setAmt2(db.rs().getDouble("AMT2"));
				vo.setAmt3(db.rs().getDouble("AMT3"));
				vo.setAmt_percent(db.rs().getDouble("AMT_PERCENT"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public List<Fix_Sales_Dtl_SalVO> selectFix_Sales_Dtl_Sal(String bp_cd, String date) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_MIS_SALES_DTL_SAL_003_NEW '");
		sql.append(bp_cd);
		sql.append("', '");
		sql.append(date);
		sql.append("'");
		db.accessDB(ConnectDB.JANGIN_HQ, "procedure", sql.toString());
		List<Fix_Sales_Dtl_SalVO> list = new ArrayList<Fix_Sales_Dtl_SalVO>();
		Fix_Sales_Dtl_SalVO vo;

		try {
			while (db.rs().next()) {
				vo = new Fix_Sales_Dtl_SalVO();
				vo.setSales_cd(db.rs().getString("SALES_CD"));
				vo.setSales_nm(db.rs().getString("SALES_NM"));
				vo.setAmt1(db.rs().getDouble("AMT1"));
				vo.setAmt2(db.rs().getDouble("AMT2"));
				vo.setAmt3(db.rs().getDouble("AMT3"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
 
		return list;
	}
}
