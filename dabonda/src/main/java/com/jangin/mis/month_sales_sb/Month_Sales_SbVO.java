package com.jangin.mis.month_sales_sb;

public class Month_Sales_SbVO {
	private String province_cd;
	private String province_nm;
	private Double plan_amt;
	private Double curr_amt;
	private Double rslt_amt;
	private Double amt_percent;

	public String getProvince_cd() {
		return province_cd;
	}

	public void setProvince_cd(String province_cd) {
		this.province_cd = province_cd;
	}

	public String getProvince_nm() {
		return province_nm;
	}

	public void setProvince_nm(String province_nm) {
		this.province_nm = province_nm;
	}

	public Double getPlan_amt() {
		return plan_amt;
	}

	public void setPlan_amt(Double plan_amt) {
		this.plan_amt = plan_amt;
	}

	public Double getCurr_amt() {
		return curr_amt;
	}

	public void setCurr_amt(Double curr_amt) {
		this.curr_amt = curr_amt;
	}

	public Double getRslt_amt() {
		return rslt_amt;
	}

	public void setRslt_amt(Double rslt_amt) {
		this.rslt_amt = rslt_amt;
	}

	public Double getAmt_percent() {
		return amt_percent;
	}

	public void setAmt_percent(Double amt_percent) {
		this.amt_percent = amt_percent;
	}
}
