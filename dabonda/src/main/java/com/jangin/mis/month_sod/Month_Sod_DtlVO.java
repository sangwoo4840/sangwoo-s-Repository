package com.jangin.mis.month_sod;

public class Month_Sod_DtlVO {
	private String province_cd;
	private String bp_cd;
	private String bp_nm;
	private Double plan_amt;
	private Double curr_amt;
	private Double rslt_amt;
	private Double del_amt;
	private Double real_amt;
	private Double real_percent;
	private Double pre_del_amt;

	public String getProvince_cd() {
		return province_cd;
	}

	public void setProvince_cd(String province_cd) {
		this.province_cd = province_cd;
	}

	public String getBp_cd() {
		return bp_cd;
	}

	public void setBp_cd(String bp_cd) {
		this.bp_cd = bp_cd;
	}

	public String getBp_nm() {
		return bp_nm;
	}

	public void setBp_nm(String bp_nm) {
		this.bp_nm = bp_nm;
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

	public Double getDel_amt() {
		return del_amt;
	}

	public void setDel_amt(Double del_amt) {
		this.del_amt = del_amt;
	}

	public Double getReal_amt() {
		return real_amt;
	}

	public void setReal_amt(Double real_amt) {
		this.real_amt = real_amt;
	}

	public Double getReal_percent() {
		return real_percent;
	}

	public void setReal_percent(Double real_percent) {
		this.real_percent = real_percent;
	}

	public Double getPre_del_amt() {
		return pre_del_amt;
	}

	public void setPre_del_amt(Double pre_del_amt) {
		this.pre_del_amt = pre_del_amt;
	}
}
