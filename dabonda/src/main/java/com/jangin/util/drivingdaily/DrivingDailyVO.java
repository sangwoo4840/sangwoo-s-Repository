package com.jangin.util.drivingdaily;

public class DrivingDailyVO {
	private String date;
	private String model;
	private String number;
	private int before_mileage;
	private int after_mileage;
	private int total_mileage;
	private int commute;
	private int business;
	private String remark;
	
	public String getDate() {
		return date;
	}
	
	public void setDate(String date) {
		this.date = date;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public int getBefore_mileage() {
		return before_mileage;
	}

	public void setBefore_mileage(int before_mileage) {
		this.before_mileage = before_mileage;
	}

	public int getAfter_mileage() {
		return after_mileage;
	}

	public void setAfter_mileage(int after_mileage) {
		this.after_mileage = after_mileage;
	}

	public int getTotal_mileage() {
		return total_mileage;
	}

	public void setTotal_mileage(int total_mileage) {
		this.total_mileage = total_mileage;
	}

	public int getCommute() {
		return commute;
	}

	public void setCommute(int commute) {
		this.commute = commute;
	}

	public int getBusiness() {
		return business;
	}

	public void setBusiness(int business) {
		this.business = business;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
}
