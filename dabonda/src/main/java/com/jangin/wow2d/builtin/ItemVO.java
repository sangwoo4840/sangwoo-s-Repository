package com.jangin.wow2d.builtin;

public class ItemVO {
	private String bi_cd;
	private String dp1;
	private String dp2;
	private String item_cd;
	private String item_nm;
	private int qty;
	private int factory_price;
	private int factory_amt;
	private int retail_price;
	private int retail_amt;
	private int issue_qty;
	
	public String getBi_cd() {
		return bi_cd;
	}
	
	public void setBi_d(String bi_cd) {
		this.bi_cd = bi_cd;
	}
	
	public String getDp1() {
		return dp1;
	}

	public void setDp1(String dp1) {
		this.dp1 = dp1;
	}

	public String getDp2() {
		return dp2;
	}

	public void setDp2(String dp2) {
		this.dp2 = dp2;
	}

	public String getItem_cd() {
		return item_cd;
	}

	public void setItem_cd(String item_cd) {
		this.item_cd = item_cd;
	}
	
	public String getItem_nm() {
		return item_nm;
	}

	public void setItem_nm(String item_nm) {
		this.item_nm = item_nm;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}

	public int getFactory_price() {
		return factory_price;
	}

	public void setFactory_price(int factory_price) {
		this.factory_price = factory_price;
	}

	public int getFactory_amt() {
		return factory_amt;
	}

	public void setFactory_amt(int factory_amt) {
		this.factory_amt = factory_amt;
	}

	public int getRetail_price() {
		return retail_price;
	}

	public void setRetail_price(int retail_price) {
		this.retail_price = retail_price;
	}

	public int getRetail_amt() {
		return retail_amt;
	}

	public void setRetail_amt(int retail_amt) {
		this.retail_amt = retail_amt;
	}

	public void setBi_cd(String bi_cd) {
		this.bi_cd = bi_cd;
	}

	public int getIssue_qty() {
		return issue_qty;
	}

	public void setIssue_qty(int issue_qty) {
		this.issue_qty = issue_qty;
	}
}
