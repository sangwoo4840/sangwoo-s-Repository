package com.jangin.wow2d.stock;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class StockDAO {
	private ConnectDB db;
	
	public List<String> getInfo(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select level, agent_cd from MoUser where email = '");
		sql.append(email);
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<String> list = new ArrayList<String>();

		try {
			db.rs().next();
			list.add(db.rs().getString("level"));
			list.add(db.rs().getString("agent_cd"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}

	public List<MajorVO> cboMajor(String email, String i_db) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select level, agent_cd from MoUser where email = '");
		sql.append(email);
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		String level = "0";
		String agent_cd = "41";
		
		try {
			db.rs().next();
			level = db.rs().getString("level");
			agent_cd = db.rs().getString("agent_cd");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if (level.equals("7"))
			level = "2";
		else
			level = "0";
		
		String s_db = "JangIn_UniERP_HQ";
		if (i_db.equals("sb"))
			s_db = "JangIn_UniERP_SB";
		
		sql.setLength(0);
		sql.append("jangin2.usp_pro010f01_New1 '");
		sql.append(agent_cd);
		sql.append("', '");
		sql.append(s_db);
		sql.append("', '");
		sql.append(level);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<MajorVO> list = new ArrayList<MajorVO>();
		MajorVO vo;

		try {
			while (db.rs().next()) {
				vo = new MajorVO();
				vo.setMajor_cd(db.rs().getString("major_cd"));
				vo.setMinor_cd(db.rs().getString("minor_cd"));
				vo.setCode_nm(db.rs().getString("code_nm"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}

	public List<MinorVO> cboMinor(String email, String major_cd, String i_db) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select level, agent_cd from MoUser where email = '");
		sql.append(email);
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		String level = "0";
		String agent_cd = "41";
		
		try {
			db.rs().next();
			level = db.rs().getString("level");
			agent_cd = db.rs().getString("agent_cd");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		if (level.equals("7"))
			level = "2";
		else
			level = "0";
		
		String s_db = "JangIn_UniERP_HQ";
		if (i_db.equals("sb"))
			s_db = "JangIn_UniERP_SB";
		
		sql.setLength(0);
		sql.append("jangin2.usp_pro010f02_New1 '");
		sql.append(major_cd);
		sql.append("', '");
		sql.append(agent_cd);
		sql.append("', '");
		sql.append(s_db);
		sql.append("', '");
		sql.append(level);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<MinorVO> list = new ArrayList<MinorVO>();
		MinorVO vo;

		vo = new MinorVO();
		vo.setMinor_cd("");
		vo.setCode_nm("전체");
		list.add(vo);
		try {
			while (db.rs().next()) {
				vo = new MinorVO();
				vo.setMajor_cd(db.rs().getString("major_cd"));
				vo.setMinor_cd(db.rs().getString("minor_cd"));
				vo.setCode_nm(db.rs().getString("code_nm"));
				vo.setNo(db.rs().getString("no"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}

	public List<StockVO> selectStock(String major_cd, String minor_cd,
			String item_cd, String item_nm, String i_db) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		StringBuilder items = new StringBuilder();
		if (minor_cd == null)
			minor_cd = "";
		String s_db = "jangin_unierp_hq";
		if (i_db.equals("sb"))
			s_db = "jangin_unierp_sb";
		sql.append("select distinct b.item_cd ");
		sql.append("from jangin2.pro010m a(nolock), ");
		sql.append("jangin2.pro011m b(nolock), ");
		sql.append("jangin2.pro020m c(nolock) ");
		sql.append("where a.model_no = b.model_no ");
		sql.append("and c.pkg_no = a.pkg_no 	");
		sql.append("and a.categorytype = '");
		sql.append(s_db);
		sql.append("' ");
		sql.append("and c.categorytype = '");
		sql.append(s_db);
		sql.append("' ");
		
		if (item_cd == "" && item_nm == "") {
			sql.append("and c.prod_gub like '");
			sql.append(major_cd);
			sql.append("' and c.prod_gub2 like '");
			sql.append(minor_cd == "" ? "%" : minor_cd);
			sql.append("'");
		} else {
			sql.append("and b.item_cd like '%");
			sql.append(item_cd == null ? "" : item_cd.trim().replace("'", "''"));
			sql.append("%' and b.item_nm like '%");
			sql.append(item_nm == null ? "" : item_nm.trim().replace("'", "''"));
			sql.append("%'");
		}
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<StockVO> list = new ArrayList<StockVO>();
		StockVO vo;

		try {
			while (db.rs().next()) {
				items.append(",");
				items.append(db.rs().getString("item_cd").trim());
			}

			s_db = "Jangin_HQ";
			if (i_db.equals("sb"))
				s_db = "Jangin_SB";
			
			StringBuilder sql2 = new StringBuilder();
			Calendar calendar = Calendar.getInstance();
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			String today = df.format(calendar.getTime());
			sql2.append(s_db);
			sql2.append(".dbo.USP_ERP_WEB2_STOCK_new2_WEB @cust_cd='41',@items='");
			sql2.append(items.toString());
			sql2.append("',@from_date='");
			sql2.append(today);
			sql2.append("',@to_date='");
			sql2.append(today);
			sql2.append("',@deal_type='01',@iPage='1',@PageSize='1000'");
			db.accessDB(ConnectDB.WOW2D, "select", sql2.toString());

			while (db.rs().next()) {
				vo = new StockVO();
				vo.setRowNum(db.rs().getInt("RowNum"));
				vo.setItem_cd(db.rs().getString("item_cd"));
				vo.setItem_nm(db.rs().getString("item_nm"));
				vo.setItem_accnt(db.rs().getInt("item_accnt"));
				vo.setIssue_qty(db.rs().getDouble("issue_qty"));

				if (vo.getItem_accnt() != 50) {
					vo.setWk_end_dt(db.rs().getString("wk_end_dt") == null ? "" : db.rs()
							.getString("wk_end_dt").substring(0, 10));
					vo.setWk_qty(db.rs().getInt("sum_wk_ord_qty"));
				} else {
					vo.setWk_end_dt(db.rs().getString("in_min_dt") == null ? "" : db.rs()
							.getString("in_min_dt").substring(0, 10));
					vo.setWk_qty(db.rs().getInt("ODR_QTY"));
				}
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
}
