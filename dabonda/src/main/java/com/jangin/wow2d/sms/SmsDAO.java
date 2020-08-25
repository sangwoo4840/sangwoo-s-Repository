package com.jangin.wow2d.sms;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class SmsDAO {
	private ConnectDB db;
	
	public List<SmsVO> getSmsList(SmsVO svo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_SO_SMS_ESS '");
		sql.append(svo.getSend_dt());
		sql.append("', '");
		sql.append(svo.getSend_dt());
		sql.append("', 'A', '");
		sql.append(svo.getSuccess_chk());
		sql.append("', 'A', '");
		sql.append(svo.getAgent_nm());
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<SmsVO> list = new ArrayList<SmsVO>();
		SmsVO vo;

		try {
			while (db.rs().next()) {
				vo = new SmsVO();
				vo.setSo_no(db.rs().getString("SO_NO"));
				vo.setSend_dt(db.rs().getString("SEND_DT"));
				vo.setSuccess_chk(db.rs().getString("SUCCESS_CHK"));
				vo.setSo_delete_chk(db.rs().getString("SO_DELETE_CHK"));
				vo.setAgent_nm(db.rs().getString("AGENT_NM"));
				vo.setCust_nm(db.rs().getString("CUST_NM"));
				vo.setCust_tel(db.rs().getString("CUST_TEL"));
				vo.setSms_type(db.rs().getString("SMS_TYPE"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
}
