package com.jangin.wow2d.sms;

public class SmsVO {
	private String so_no;
	private String send_dt;
	private String success_chk;
	private String so_delete_chk;
	private String agent_nm;
	private String cust_nm;
	private String cust_tel;
	private String sms_type;

	public String getSo_no() {
		return so_no;
	}

	public void setSo_no(String so_no) {
		this.so_no = so_no;
	}

	public String getSend_dt() {
		return send_dt;
	}

	public void setSend_dt(String send_dt) {
		this.send_dt = send_dt;
	}

	public String getSuccess_chk() {
		return success_chk;
	}

	public void setSuccess_chk(String success_chk) {
		this.success_chk = success_chk;
	}

	public String getSo_delete_chk() {
		return so_delete_chk;
	}

	public void setSo_delete_chk(String so_delete_chk) {
		this.so_delete_chk = so_delete_chk;
	}

	public String getAgent_nm() {
		return agent_nm;
	}

	public void setAgent_nm(String agent_nm) {
		this.agent_nm = agent_nm;
	}

	public String getCust_nm() {
		return cust_nm;
	}

	public void setCust_nm(String cust_nm) {
		this.cust_nm = cust_nm;
	}

	public String getCust_tel() {
		return cust_tel;
	}

	public void setCust_tel(String cust_tel) {
		this.cust_tel = cust_tel;
	}

	public String getSms_type() {
		return sms_type;
	}

	public void setSms_type(String sms_type) {
		this.sms_type = sms_type;
	}
}
