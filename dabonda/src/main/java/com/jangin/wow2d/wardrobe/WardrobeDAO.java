package com.jangin.wow2d.wardrobe;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class WardrobeDAO {
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
	
	public List<InfoVO> getWardrobeKind(String email, String type) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 wi.WR_CD, wi.NAME, wi.STATUS ");
		sql.append("from	 WARDROBE_AUTH wa(nolock) ");
		sql.append("left join WARDROBE_INFO wi(nolock) on wi.WR_CD = wa.WR_CD and wa.EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("where	 wi.TYPE = '");
		sql.append(type);
		sql.append("' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		List<InfoVO> list = new ArrayList<InfoVO>();
		InfoVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new InfoVO();
				vo.setWr_cd(db.rs().getString("WR_CD"));
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
		sql.append("exec USP_GET_WARDROBE_OPTION'");
		sql.append(kind);
		sql.append("' ");
		
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		List<ItemVO> list = new ArrayList<ItemVO>();
		ItemVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new ItemVO();
				vo.setItem_grp(db.rs().getString("ITEM_GRP"));
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
	
	public List<ItemVO> getItemList(WardrobeVO bvo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_WARDROBE_ITEM'");
		sql.append(bvo.getType());
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
	
	private StringBuilder chkSaveTitle(String email, String title) {
		StringBuilder sql = new StringBuilder();
		sql.append("select count(*) as count ");
		sql.append("from (select INSRT_DT, EMAIL, TITLE from SLIDE_SAVE_HDR union select INSRT_DT, EMAIL, TITLE from BUILTIN_SAVE_HDR union select INSRT_DT, EMAIL, TITLE from DRESSROOM_SAVE_HDR) a ");
		sql.append("where convert(varchar(10), INSRT_DT, 121) = convert(varchar(10), getdate(), 121) ");
		sql.append("and EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("and TITLE = '");
		sql.append(title);
		sql.append("' ");
		
		return sql;
	}
	
	public int saveWardrobeSd(String email, String title, WardrobeVO bvo) {
		db = new ConnectDB();
		StringBuilder sql = chkSaveTitle(email, title);
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		try {
			db.rs().next();
			if (db.rs().getInt("count") > 0)
				return 2; // 제목 중복 오류
			
			sql.setLength(0);
//			sql.append("exec USP_SAVE_SLIDE_TEST @email='");
			sql.append("exec USP_SAVE_SLIDE @email='");
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
			sql.append("', @pillar=");
			sql.append(bvo.getPillar());
			sql.append(", @ep='");
			sql.append(bvo.getEp());
			sql.append("', @option='");
			sql.append(bvo.getOption());
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
	
	public int saveWardrobeBI(String email, String title, WardrobeVO bvo) {
		db = new ConnectDB();
		StringBuilder sql = chkSaveTitle(email, title);
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
	
	public int saveWardrobeDR(String email, String title, WardrobeVO bvo, int dh_qty) {
		db = new ConnectDB();
		StringBuilder sql = chkSaveTitle(email, title);
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		try {
			db.rs().next();
			if (db.rs().getInt("count") > 0)
				return 2; // 제목 중복 오류
			
			sql.setLength(0);
			sql.append("exec USP_SAVE_DRESSROOM @email='");
			sql.append(email);
			sql.append("', @title='");
			sql.append(title);
			sql.append("', @kind='");
			sql.append(bvo.getKind());
			sql.append("', @fb_width=");
			sql.append(bvo.getWidth());
			sql.append(", @lr_width=");
			sql.append(bvo.getHeight());
			sql.append(", @body='");
			sql.append(bvo.getBody());
			sql.append("', @dh_qty=");
			sql.append(dh_qty);
			sql.append(", @img_above='");
			sql.append(bvo.getImg_above());
			sql.append("', @img_forward='");
			sql.append(bvo.getImg_forward());
			sql.append("', @img_left='");
			sql.append(bvo.getImg_left());
			sql.append("', @img_right='");
			sql.append(bvo.getImg_right());
			sql.append("', @img_backward='");
			sql.append(bvo.getImg_backward());
			sql.append("' ");
			
			db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());
		} catch (Exception e) {
			e.printStackTrace();
			
			return 0;
		}
		db.closeDB();
		
		return 1;
	}
	
	
	
	public List<AgentVO> getWrauthAgent() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 email, name, team, agent_cd, level ");
		sql.append("from	 MoUser ");
		sql.append("where	 auth like '%w2d_wrb%' ");
		sql.append("order by level desc, team ");
		
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<AgentVO> list = new ArrayList<AgentVO>();
		AgentVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new AgentVO();
				vo.setEmail(db.rs().getString("email"));
				vo.setName(db.rs().getString("name"));
				vo.setTeam(db.rs().getString("team"));
				vo.setAgent_cd(db.rs().getString("agent_cd"));
				vo.setLevel(db.rs().getInt("level"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<AuthVO> getWrauthKind() {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 WR_CD, TYPE, NAME ");
		sql.append("from	 WARDROBE_INFO(nolock) ");
		sql.append("where	 STATUS = 'Y' ");
		sql.append("order by TYPE ");
		
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<AuthVO> list = new ArrayList<AuthVO>();
		AuthVO vo;
		try {
			while (db.rs().next()) {
				vo = new AuthVO();
				vo.setWr_cd(db.rs().getString("WR_CD"));
				vo.setType(db.rs().getString("TYPE"));
				vo.setName(db.rs().getString("NAME"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<AuthVO> getWrauthAuth(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select	 wi.WR_CD, wi.TYPE, wi.NAME, wi.STATUS, case when wa.WR_CD is null then 'N' else 'Y' end as AUTH ");
		sql.append("from	 WARDROBE_INFO wi(nolock) ");
		sql.append("left join (select	 * ");
		sql.append("		   from		 WARDROBE_AUTH(nolock) ");
		sql.append("		   where	 EMAIL = '");
		sql.append(email);
		sql.append("') wa on wi.WR_CD = wa.WR_CD ");
		sql.append("order by wi.TYPE ");
		
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<AuthVO> list = new ArrayList<AuthVO>();
		AuthVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new AuthVO();
				vo.setWr_cd(db.rs().getString("WR_CD"));
				vo.setType(db.rs().getString("TYPE"));
				vo.setName(db.rs().getString("NAME"));
				vo.setStatus(db.rs().getString("STATUS"));
				vo.setAuth(db.rs().getString("AUTH"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public int setWrauth(String email, String auth, String user) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("delete from WARDROBE_AUTH where EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("insert into WARDROBE_AUTH(EMAIL, WR_CD, INSRT_DT, INSRT_ID) ");
		sql.append("select	 '");
		sql.append(email);
		sql.append("', Value, getdate(), '");
		sql.append(user);
		sql.append("' ");
		sql.append("from	 Jangin_HQ.dbo.fnSplit('");
		sql.append(auth);
		sql.append("', ',') ");
		sql.append("where	 Value <> '' ");
		
		db.accessDB(ConnectDB.WOW2D, "insert", sql.toString());
		
		return 1;
	}
	
	public int setWrauthAll(String wr_cd, String addsub, String user) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("delete from WARDROBE_AUTH where WR_CD = '");
		sql.append(wr_cd);
		sql.append("' ");
		if (addsub.equals("add")) {
			sql.append("insert into WARDROBE_AUTH(EMAIL, WR_CD, INSRT_DT, INSRT_ID) ");
			sql.append("select	 email, '");
			sql.append(wr_cd);
			sql.append("', getdate(), '");
			sql.append(user);
			sql.append("' ");
			sql.append("from	 MoUser mu ");
			sql.append("where	 auth like '%w2d_wrb%' ");
		}
		
		db.accessDB(ConnectDB.WOW2D, "insert", sql.toString());
		
		return 1;
	}
	
	
	
	// mwow2d 이메일
	public String getEmail(String mwow2d) {
		String email = "";
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("SELECT EMAIL FROM MW_USER WHERE USER_ID = '"+mwow2d+"' ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		try {
			if (db.rs().next()) {
				email = db.rs().getString("EMAIL");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return email;
	}
}
