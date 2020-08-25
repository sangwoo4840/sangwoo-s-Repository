package com.jangin.mis.daily_dn;

public class Daily_DnVO {
	private int seq;
	private String province_cd;
	private String province_nm;
	private float month_amt;
	private float com_amt;
	private float no_amt;
	private float sum_amt;
	private String rate;

	public int getSeq() {
		return seq;
	}

	public void setSeq(int seq) {
		this.seq = seq;
	}

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

	public float getMonth_amt() {
		return month_amt;
	}

	public void setMonth_amt(float month_amt) {
		this.month_amt = month_amt;
	}

	public float getCom_amt() {
		return com_amt;
	}

	public void setCom_amt(float com_amt) {
		this.com_amt = com_amt;
	}

	public float getNo_amt() {
		return no_amt;
	}

	public void setNo_amt(float no_amt) {
		this.no_amt = no_amt;
	}

	public float getSum_amt() {
		return sum_amt;
	}

	public void setSum_amt(float sum_amt) {
		this.sum_amt = sum_amt;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}
}
