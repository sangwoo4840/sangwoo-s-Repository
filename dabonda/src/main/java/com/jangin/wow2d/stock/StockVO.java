package com.jangin.wow2d.stock;

public class StockVO {
	private int rowNum;
	private String item_cd;
	private String item_nm;
	private int item_accnt;
	private double issue_qty;
	private int wk_qty;
	private String wk_end_dt;

	public int getRowNum() {
		return rowNum;
	}

	public void setRowNum(int rowNum) {
		this.rowNum = rowNum;
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

	public int getItem_accnt() {
		return item_accnt;
	}

	public void setItem_accnt(int item_accnt) {
		this.item_accnt = item_accnt;
	}

	public double getIssue_qty() {
		return issue_qty;
	}

	public void setIssue_qty(double issue_qty) {
		this.issue_qty = issue_qty;
	}

	public int getWk_qty() {
		return wk_qty;
	}

	public void setWk_qty(int wk_qty) {
		this.wk_qty = wk_qty;
	}

	public String getWk_end_dt() {
		return wk_end_dt;
	}

	public void setWk_end_dt(String wk_end_dt) {
		this.wk_end_dt = wk_end_dt;
	}
}
