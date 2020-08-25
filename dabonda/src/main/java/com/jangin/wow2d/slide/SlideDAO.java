package com.jangin.wow2d.slide;

import java.util.ArrayList;
import java.util.List;

import com.jangin.dabonda.ConnectDB;

public class SlideDAO {
	private ConnectDB db;
	
	public List<BasicVO> getBasic(String email) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select 'S' as TYPE, TITLE, KIND, convert(varchar, INSRT_DT, 121) as ODR ");
		sql.append("from SLIDE_STORE_HDR(nolock) ");
		sql.append("where convert(varchar(10), INSRT_DT, 121) = convert(varchar(10), getdate(), 121) ");
		sql.append("and EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("union ");
		sql.append("select 'K' as TYPE, '' as TITLE, VAL1 as KIND, convert(varchar, N_VAL1) ");
		sql.append("from SLIDE_CRITERIA(nolock) ");
		sql.append("where TYPE = '종류' ");
		sql.append("order by TYPE, ODR ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		
		List<BasicVO> list = new ArrayList<BasicVO>();
		BasicVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new BasicVO();
				vo.setType(db.rs().getString("TYPE"));
				vo.setTitle(db.rs().getString("TITLE"));
				vo.setKind(db.rs().getString("KIND"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public List<ItemVO> getOptionList(SlideVO svo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select DP2, ITEM_CD, FACTORY_PRICE, RETAIL_PRICE ");
		sql.append("from SLIDE_ITEM_PRICE ");
		sql.append("where KIND = '");
		sql.append(svo.getKind());
		sql.append("' ");
		sql.append("and TYPE = '옵션' ");
		
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());
		List<ItemVO> list = new ArrayList<ItemVO>();
		ItemVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new ItemVO();
				vo.setDp2(db.rs().getString("DP2"));
				vo.setItem_cd(db.rs().getString("ITEM_CD"));
				vo.setFactory_price(db.rs().getInt("FACTORY_PRICE"));
				vo.setRetail_price(db.rs().getInt("RETAIL_PRICE"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public InfoVO getSlideInfo(SlideVO svo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_SLIDE 'H', '");
		sql.append(svo.getKind());
		sql.append("', ");
		sql.append(svo.getWidth());
		sql.append(", ");
		sql.append(svo.getHeight());
		db.accessDB(ConnectDB.WOW2D, "procedure", sql.toString());

		InfoVO ivo = new InfoVO();
		try {
			db.rs().next();
			ivo.setBody(db.rs().getString("BODY"));
			ivo.setJabara(db.rs().getString("JABARA"));
			ivo.setPillar(db.rs().getString("PILLAR"));
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return ivo;
	}
	
	public List<ItemVO> getItemList(SlideVO svo) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("exec USP_GET_SLIDE 'I', '");
		sql.append(svo.getKind());
		sql.append("', ");
		sql.append(svo.getWidth());
		sql.append(", ");
		sql.append(svo.getHeight());
		sql.append(", '");
		sql.append(svo.getBodyLR());
		sql.append("', '");
		sql.append(svo.getPillarLR());
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
				vo.setQty(db.rs().getInt("QTY"));
				vo.setFactory_price(db.rs().getInt("FACTORY_PRICE"));
				vo.setFactory_amt(db.rs().getInt("FACTORY_AMT"));
				vo.setRetail_price(db.rs().getInt("RETAIL_PRICE"));
				vo.setRetail_amt(db.rs().getInt("RETAIL_AMT"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
	
	public int slideStore(String email, String title, SlideVO svo, List<ItemVO> list) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select count(*) as count ");
		sql.append("from SLIDE_STORE_HDR ");
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
			sql.append("insert into SLIDE_STORE_HDR(INSRT_DT, EMAIL, TITLE, AGENT_CD, KIND, WIDTH, HEIGHT, BODY_LR, PILLAR_LR) values(getdate(), '");
			sql.append(email);
			sql.append("', '");
			sql.append(title);
			sql.append("', (select agent_cd from MoUser where email = '");
			sql.append(email);
			sql.append("'), '");
			sql.append(svo.getKind());
			sql.append("', ");
			sql.append(svo.getWidth());
			sql.append(", ");
			sql.append(svo.getHeight());
			sql.append(", '");
			sql.append(svo.getBodyLR());
			sql.append("', '");
			sql.append(svo.getPillarLR());
			sql.append("') \n");
			
			for (ItemVO vo : list) {
				sql.append("insert into SLIDE_STORE_DTL(INSRT_DT, EMAIL, TITLE, ITEM_CD, QTY, FACTORY_PRICE, RETAIL_PRICE) values(getdate(), '");
				sql.append(email);
				sql.append("', '");
				sql.append(title);
				sql.append("', '");
				sql.append(vo.getItem_cd());
				sql.append("', ");
				sql.append(vo.getQty());
				sql.append(", (select PRICE * 1.1 from Jangin_HQ.dbo.baa911zt_ko522 where BASE_TYPE = '10' and ITEM_CD = '");
				sql.append(vo.getItem_cd());
				sql.append("'), (select PRICE_CUST from Jangin_HQ.dbo.baa911zt_ko522 where BASE_TYPE = '10' and ITEM_CD = '");
				sql.append(vo.getItem_cd());
				sql.append("')) \n");
			}
			db.accessDB(ConnectDB.WOW2D, "insert", sql.toString());
		} catch (Exception e) {
			e.printStackTrace();
			
			return 0;
		}
		db.closeDB();
		
		return 1;
	}
	
	public List<SlideVO> getSlideLoad(String email, String title) {
		db = new ConnectDB();
		StringBuilder sql = new StringBuilder();
		sql.append("select 'H' as CAPTION, KIND, WIDTH, HEIGHT, BODY_LR, PILLAR_LR, '' as ITEM_CD, 0 as QTY ");
		sql.append("from SLIDE_STORE_HDR(nolock) ");
		sql.append("where convert(varchar(10), INSRT_DT, 121) = convert(varchar(10), getdate(), 121) ");
		sql.append("and EMAIL = '");
		sql.append(email);
		sql.append("' ");
		sql.append("and TITLE = '");
		sql.append(title);
		sql.append("' ");
		sql.append("union ");
		sql.append("select 'O', '', 0, 0, '', '', ssd.ITEM_CD, ssd.QTY ");
		sql.append("from SLIDE_ITEM_PRICE sip(nolock) ");
		sql.append("left join SLIDE_STORE_DTL ssd(nolock) on ssd.EMAIL = '");
		sql.append(email);
		sql.append("' and ssd.TITLE = '");
		sql.append(title);
		sql.append("' and convert(varchar(10), ssd.INSRT_DT, 121) = convert(varchar(10), getdate(), 121) and sip.ITEM_CD = ssd.ITEM_CD ");
		sql.append("where sip.KIND = (select top 1 KIND from SLIDE_STORE_HDR(nolock) where convert(varchar(10), INSRT_DT, 121) = convert(varchar(10), getdate(), 121) and EMAIL = '");
		sql.append(email);
		sql.append("' and TITLE = '");
		sql.append(title);
		sql.append("') ");
		sql.append("and sip.TYPE = '옵션' ");
		sql.append("and ssd.ITEM_CD is not null ");
		sql.append("order by CAPTION ");
		db.accessDB(ConnectDB.WOW2D, "select", sql.toString());

		List<SlideVO> list = new ArrayList<SlideVO>();
		SlideVO vo;
		
		try {
			while (db.rs().next()) {
				vo = new SlideVO();
				vo.setCaption(db.rs().getString("CAPTION"));
				vo.setKind(db.rs().getString("KIND"));
				vo.setWidth(db.rs().getInt("WIDTH"));
				vo.setHeight(db.rs().getInt("HEIGHT"));
				vo.setBodyLR(db.rs().getString("BODY_LR"));
				vo.setPillarLR(db.rs().getString("PILLAR_LR"));
				vo.setItem_cd(db.rs().getString("ITEM_CD"));
				vo.setQty(db.rs().getInt("QTY"));
				list.add(vo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		db.closeDB();
		
		return list;
	}
}
