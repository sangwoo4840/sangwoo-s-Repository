package com.jangin.wow2d.builtin;

public class StockVO {
	private String item_cd;
	private int issue_qty;
	private int sum_wk_ord_qty;
	private int odr_qty;
	private String wk_end_dt;
	private String in_min_dt;

	public String getItem_cd() {
		return item_cd;
	}

	public void setItem_cd(String item_cd) {
		this.item_cd = item_cd;
	}

	public int getIssue_qty() {
		return issue_qty;
	}

	public void setIssue_qty(int issue_qty) {
		this.issue_qty = issue_qty;
	}

	public int getSum_wk_ord_qty() {
		return sum_wk_ord_qty;
	}

	public void setSum_wk_ord_qty(int sum_wk_ord_qty) {
		this.sum_wk_ord_qty = sum_wk_ord_qty;
	}

	public int getOdr_qty() {
		return odr_qty;
	}

	public void setOdr_qty(int odr_qty) {
		this.odr_qty = odr_qty;
	}

	public String getWk_end_dt() {
		return wk_end_dt;
	}

	public void setWk_end_dt(String wk_end_dt) {
		this.wk_end_dt = wk_end_dt;
	}

	public String getIn_min_dt() {
		return in_min_dt;
	}

	public void setIn_min_dt(String in_min_dt) {
		this.in_min_dt = in_min_dt;
	}
}
