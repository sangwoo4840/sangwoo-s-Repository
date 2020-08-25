package com.jangin.wow2d.car;

public class CarVO {
	private String car_no;
	private String team_no;
	private String ampm;
	private int tran_size;
	private int car_size;
	private String deadline;

	public String getCar_no() {
		return car_no;
	}

	public void setCar_no(String car_no) {
		this.car_no = car_no;
	}

	public String getTeam_no() {
		return team_no;
	}

	public void setTeam_no(String team_no) {
		this.team_no = team_no;
	}

	public String getAmpm() {
		return ampm;
	}

	public void setAmpm(String ampm) {
		this.ampm = ampm;
	}

	public int getTran_size() {
		return tran_size;
	}

	public void setTran_size(int tran_size) {
		this.tran_size = tran_size;
	}

	public int getCar_size() {
		return car_size;
	}

	public void setCar_size(int car_size) {
		this.car_size = car_size;
	}

	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}
}
