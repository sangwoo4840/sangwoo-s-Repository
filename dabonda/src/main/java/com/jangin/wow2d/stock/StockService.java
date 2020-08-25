package com.jangin.wow2d.stock;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import com.jangin.dabonda.DabondaDAO;
import com.jangin.dabonda.LogVO;

@Component
public class StockService {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private HttpSession session;
	@Autowired
	private ModelAndView mav;

	public ModelAndView execute(int index) {
		DabondaDAO dao = new DabondaDAO();
		LogVO vo = new LogVO();
		vo.setEmail(session.getAttribute("dabonda").toString());
		
		switch (index) {
		case 1:
			mav = stock();
			vo.setPid("w2d_stk");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView stock() {
		StockDAO dao = new StockDAO();
		List<String> list = dao.getInfo(session.getAttribute("dabonda").toString());
		StringBuilder sb = new StringBuilder();
		sb.append("");
		
		int level = 99;
		if (list != null)
			level = Integer.parseInt(list.get(0));
		if (level == 0 || level == 1 || level == 6) {
			sb.append("<div class='col-3-12 mobile-col-3-12'>");
			sb.append("<div class='content'>회사</div>");
			sb.append("</div>");
			sb.append("<div class='col-9-12 mobile-col-9-12'>");
			sb.append("<div class='content'><select id='company' onchange='getSelect();'><option value='hq' selected>장인가구</option><option value='sb'>(주)장인</option></select></div>");
			sb.append("</div>");
		}
		
		mav.addObject("selectCompany", sb.toString());
		mav.setViewName("wow2d/stock");
		return mav;
	}
	
	public List<Map<String, String>> cboMajor() {
		StockDAO dao = new StockDAO();
		String db = "hq";
		if (request.getParameter("db") != null)
			db = request.getParameter("db");
		List<MajorVO> list = dao.cboMajor(session.getAttribute("dabonda").toString(), db);
		List<Map<String, String>> jlist = new ArrayList<Map<String,String>>();
		Map<String, String> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, String>();
			map.put("major_cd", list.get(i).getMajor_cd());
			map.put("minor_cd", list.get(i).getMinor_cd());
			map.put("code_nm", list.get(i).getCode_nm());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, String>> cboMinor() {
		StockDAO dao = new StockDAO();
		String db = "hq";
		if (request.getParameter("db") != null)
			db = request.getParameter("db");
		String major_cd = request.getParameter("major_cd");
		List<MinorVO> list = dao.cboMinor(session.getAttribute("dabonda").toString(), major_cd, db);
		List<Map<String, String>> jlist = new ArrayList<Map<String,String>>();
		Map<String, String> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, String>();
			map.put("major_cd", list.get(i).getMajor_cd());
			map.put("minor_cd", list.get(i).getMinor_cd());
			map.put("code_nm", list.get(i).getCode_nm());
			map.put("no", list.get(i).getNo());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> searchStock() {
		StockDAO dao = new StockDAO();
		String major_cd = request.getParameter("major_cd");
		String minor_cd = request.getParameter("minor_cd");
		String item_cd = request.getParameter("item_cd");
		String item_nm = request.getParameter("item_nm");
		String db = "hq";
		if (request.getParameter("db") != null)
			db = request.getParameter("db");
		List<StockVO> list = dao.selectStock(major_cd, minor_cd, item_cd, item_nm, db);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		String wk_end_dt = "";
		String wk_qty = "";
		for(int i = 0; i < list.size(); i++) {
			wk_end_dt = list.get(i).getWk_end_dt();
			wk_qty = "" + list.get(i).getWk_qty();
			
			for(int j = i + 1; j < list.size(); j++) {
				if(list.get(i).getItem_cd().equals(list.get(j).getItem_cd())) {
					wk_end_dt += "," + list.get(j).getWk_end_dt();
					wk_qty += "," + list.get(j).getWk_qty();
					list.remove(j);
					j--;
				}
			}
			
			map = new HashMap<String, Object>();
			map.put("rownum", list.get(i).getRowNum());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("item_nm", list.get(i).getItem_nm());
			map.put("issue_qty", list.get(i).getIssue_qty());
			map.put("wk_end_dt", wk_end_dt);
			map.put("wk_qty", wk_qty);
			jlist.add(map);
		}
		
		return jlist;
	}
}
