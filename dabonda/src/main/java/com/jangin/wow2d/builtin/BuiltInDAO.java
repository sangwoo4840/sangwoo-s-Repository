package com.jangin.wow2d.builtin;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class BuiltInDAO {
	private ConnectDB db;
	
	public String getUserLevel(String user) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 level\n");
		sql.append("from	 MoUser\n");
		sql.append("where	 email = '");
		sql.append(user);
		sql.append("'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		String level = new String();
		try {
			db.rs().next();
			level = db.rs().getString("level");
		} catch (SQLException e) {
			e.printStackTrace();
			db.closeDB();
			return null;
		}
		db.closeDB();
		
		return level;
	}
	
	public List<InfoVO> getBasic() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 BID, NAME, STATUS ");
		sql.append("from	 BUILTIN_INFO(nolock) ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		List<InfoVO> list = new ArrayList<InfoVO>();
		InfoVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new InfoVO();
				vo.setBid(db.rs().getString("BID"));
				vo.setName(db.rs().getString("NAME"));
				vo.setStatus(db.rs().getString("STATUS"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<ItemVO> getOptionList(String kind) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_BUILTIN_OPTION '");
		sql.append(kind);
		sql.append("' ");
		
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<ItemVO> list = new ArrayList<ItemVO>();
		ItemVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new ItemVO();
				vo.setBi_d(db.rs().getString("BI_CD"));
				vo.setDp2(db.rs().getString("DP2"));
				vo.setItem_cd(db.rs().getString("ITEM_CD"));
				vo.setItem_nm(db.rs().getString("ITEM_NM"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<ItemVO> getItemList(BuiltInVO bvo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_BUILTIN_ITEM @kind='");
		sql.append(bvo.getKind());
		sql.append("', @width=");
		sql.append(bvo.getWidth());
		sql.append(", @height=");
		sql.append(bvo.getHeight());
		sql.append(", @body='");
		sql.append(bvo.getBody());
		sql.append("', @door='");
		sql.append(bvo.getDoor());
		sql.append("', @jabara='");
		sql.append(bvo.getJabara());
		sql.append("', @jabara_sub='");
		sql.append(bvo.getJabara_sub());
		sql.append("', @pillar=");
		sql.append(bvo.getPillar());
		sql.append(", @ep='");
		sql.append(bvo.getEp());
		sql.append("', @option='");
		sql.append(bvo.getOption());
		sql.append("' ");
		
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<ItemVO> list = new ArrayList<ItemVO>();
		ItemVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new ItemVO();
				vo.setDp1(db.rs().getString("DP1"));
				vo.setDp2(db.rs().getString("DP2"));
				vo.setItem_cd(db.rs().getString("ITEM_CD"));
				vo.setItem_nm(db.rs().getString("ITEM_NM"));
				vo.setQty(db.rs().getInt("QTY"));
				vo.setFactory_price(db.rs().getInt("FACTORY_PRICE"));
				vo.setFactory_amt(db.rs().getInt("FACTORY_AMT"));
				vo.setRetail_price(db.rs().getInt("RETAIL_PRICE"));
				vo.setRetail_amt(db.rs().getInt("RETAIL_AMT"));
				vo.setIssue_qty(db.rs().getInt("ISSUE_QTY"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<StockVO> getItemStock(String item_cd) {
		db = new ConnectDB();
		
		StringBuilder sql = new StringBuilder();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		String today = df.format(calendar.getTime());
		sql.append("Jangin_HQ.dbo.USP_ERP_WEB2_STOCK_new2_WEB @cust_cd='41',@items='");
		sql.append(item_cd);
		sql.append("',@from_date='");
		sql.append(today);
		sql.append("',@to_date='");
		sql.append(today);
		sql.append("',@deal_type='01',@iPage='1',@PageSize='1000'");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		List<StockVO> list = new ArrayList<StockVO>();
		StockVO svo = null;
		try {
			while (db.rs().next()) {
				svo = new StockVO();
				svo.setIssue_qty(db.rs().getInt("issue_qty"));
				svo.setWk_end_dt(db.rs().getString("wk_end_dt"));
				svo.setSum_wk_ord_qty(db.rs().getInt("sum_wk_ord_qty"));
				svo.setIn_min_dt(db.rs().getString("in_min_dt"));
				svo.setOdr_qty(db.rs().getInt("odr_qty"));
				list.add(svo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();

		return list;
	}
	
	public int saveBuiltin(String email, String title, BuiltInVO bvo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select count(*) as count ");
		sql.append("from BUILTIN_SAVE_HDR ");
		sql.append("where convert(varchar(10), INSRT_DT, 121) = convert(varchar(10), getdate(), 121) ");
		sql.append("and EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("and TITLE = '");
		sql.append(title);
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		try {
			db.rs().next();
			if (db.rs().getInt("count") > 0)
				return 2; // 제목 중복 오류
			
			sql.setLength(0);
			sql.append("exec USP_SAVE_BUILTIN @email='");
			sql.append(email);
			sql.append("', @title='");
			sql.append(title);
			sql.append("', @kind='");
			sql.append(bvo.getKind());
			sql.append("', @width=");
			sql.append(bvo.getWidth());
			sql.append(", @height=");
			sql.append(bvo.getHeight());
			sql.append(", @body='");
			sql.append(bvo.getBody());
			sql.append("', @door='");
			sql.append(bvo.getDoor());
			sql.append("', @jabara='");
			sql.append(bvo.getJabara());
			sql.append("', @jabara_sub='");
			sql.append(bvo.getJabara_sub());
			sql.append("', @pillar=");
			sql.append(bvo.getPillar());
			sql.append(", @ep='");
			sql.append(bvo.getEp());
			sql.append("', @option='");
			sql.append(bvo.getOption());
			sql.append("', @position='");
			sql.append(bvo.getPosition());
			sql.append("', @img_no_dr='");
			sql.append(bvo.getImg_no_dr());
			sql.append("', @img_dr='");
			sql.append(bvo.getImg_dr());
			sql.append("' ");
			
			db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		} catch (Exception e) {
			e.printStackTrace();
			
			return 0;
		}
		db.closeDB();
		
		return 1;
	}
}
