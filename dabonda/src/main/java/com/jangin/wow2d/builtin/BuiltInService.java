package com.jangin.wow2d.builtin;

import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import com.google.api.client.repackaged.org.apache.commons.codec.binary.Base64;
import com.jangin.dabonda.DabondaDAO;
import com.jangin.dabonda.LogVO;

@Component
public class BuiltInService {
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
			mav = builtin();
			vo.setPid("w2d_bti");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView builtin() {
		BuiltInDAO dao = new BuiltInDAO();
		String userLevel = dao.getUserLevel(session.getAttribute("dabonda").toString());
		if (userLevel == null || userLevel.equals(""))
			userLevel = "7";
		int level = Integer.parseInt(userLevel);
		
		List<InfoVO> list = dao.getBasic();
		String kind = "<select id='kind' onchange='getOptionList();'><option>종류</option>";
		for(int i = 0; i < list.size(); i++) {
			if (list.get(i).getStatus().equals("Y"))
				kind += "<option value='" + list.get(i).getBid() + "'>" + list.get(i).getName() + "</option>";
			if (level <= 4 && list.get(i).getStatus().equals("T"))
				kind += "<option value='" + list.get(i).getBid() + "'>" + list.get(i).getName() + "(테스트)</option>";
		}
		kind += "</select>";
		
		mav.addObject("kind", kind);
		mav.setViewName("wow2d/builtin");
		
		return mav;
	}
	
	public List<Map<String, Object>> getOptionList() {
		BuiltInDAO dao = new BuiltInDAO();
		
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		
		List<ItemVO> list = dao.getOptionList(kind);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("bi_cd", list.get(i).getBi_cd());
			map.put("dp2", list.get(i).getDp2());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("item_nm", list.get(i).getItem_nm());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getItemList() {
		BuiltInDAO dao = new BuiltInDAO();
		BuiltInVO bvo = new BuiltInVO();
		
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		int width = 0;
		if (request.getParameter("width") != null)
			width = Integer.parseInt(request.getParameter("width"));
		int height = 0;
		if (request.getParameter("height") != null)
			height = Integer.parseInt(request.getParameter("height"));
		String body = "";
		if (request.getParameter("body") != null)
			body = request.getParameter("body");
		String door = "";
		if (request.getParameter("door") != null)
			door = request.getParameter("door");
		String jabara = "";
		if (request.getParameter("jabara") != null)
			jabara = request.getParameter("jabara");
		String jabara_sub = "";
		if (request.getParameter("jabara_sub") != null)
			jabara_sub = request.getParameter("jabara_sub");
		int pillar = 0;
		if (request.getParameter("pillar") != null)
			pillar = (int) Math.round(Double.parseDouble(request.getParameter("pillar")));
		String ep = "";
		if (request.getParameter("ep") != null)
			ep = request.getParameter("ep");
		String option = "";
		if (request.getParameter("option") != null)
			option = request.getParameter("option");
		
		bvo.setKind(kind);
		bvo.setWidth(width);
		bvo.setHeight(height);
		bvo.setBody(body);
		bvo.setDoor(door);
		bvo.setJabara(jabara);
		bvo.setJabara_sub(jabara_sub);
		bvo.setPillar(pillar);
		bvo.setEp(ep);
		bvo.setOption(option);
		
		List<ItemVO> list = dao.getItemList(bvo);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("dp1", list.get(i).getDp1());
			map.put("dp2", list.get(i).getDp2());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("item_nm", list.get(i).getItem_nm());
			map.put("qty", list.get(i).getQty());
			map.put("factory_price", list.get(i).getFactory_price());
			map.put("factory_amt", list.get(i).getFactory_amt());
			map.put("retail_price", list.get(i).getRetail_price());
			map.put("retail_amt", list.get(i).getRetail_amt());
			map.put("issue_qty", list.get(i).getIssue_qty());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> saveBuiltin() {
		BuiltInDAO dao = new BuiltInDAO();
		int result = 0;
		BuiltInVO bvo = new BuiltInVO();
		
		String email = "";
		if (session.getAttribute("dabonda") != null)
			email = session.getAttribute("dabonda").toString();
		String title = "";
		if (request.getParameter("title") != null)
			title = request.getParameter("title");
		
		int width = 0;
		if (request.getParameter("width") != null)
			width = Integer.parseInt(request.getParameter("width"));
		int height = 0;
		if (request.getParameter("height") != null)
			height = Integer.parseInt(request.getParameter("height"));
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		String body = "";
		if (request.getParameter("body") != null)
			body = request.getParameter("body");
		String door = "";
		if (request.getParameter("door") != null)
			door = request.getParameter("door");
		String jabara = "";
		if (request.getParameter("jabara") != null)
			jabara = request.getParameter("jabara");
		String jabara_sub = "";
		if (request.getParameter("jabara_sub") != null)
			jabara_sub = request.getParameter("jabara_sub");
		int pillar = 0;
		if (request.getParameter("pillar") != null)
			pillar = (int) Math.round(Double.parseDouble(request.getParameter("pillar")));
		String ep = "";
		if (request.getParameter("ep") != null)
			ep = request.getParameter("ep");
		String option = "";
		if (request.getParameter("option") != null)
			option = request.getParameter("option");
		String position = "";
		if (request.getParameter("position") != null)
			position = request.getParameter("position");
		
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String date = sdf.format(calendar.getTime());
		FileOutputStream stream = null;
		
		String temp_img_no_dr = "";
		byte[] bt_img_no_dr = null;
		String img_no_dr = "";
		if (request.getParameter("img_no_dr") != null) {
			temp_img_no_dr = request.getParameter("img_no_dr");
			temp_img_no_dr = temp_img_no_dr.replaceAll("data:image/png;base64,", "");
			bt_img_no_dr = Base64.decodeBase64(temp_img_no_dr);
			
			try {
				img_no_dr = date + "_" + email + "_" + title + "_no_dr.png";
				stream = new FileOutputStream("/home/janginf/tomcat/img/" + img_no_dr);
				stream.write(bt_img_no_dr);
				stream.close();
			} catch(Exception e) {
				System.out.println("파일이 정상적으로 넘어오지 않았습니다");
			}
		}
		String temp_img_dr = "";
		byte[] bt_img_dr;
		String img_dr = "";
		if (request.getParameter("img_dr") != null) {
			temp_img_dr = request.getParameter("img_dr");
			temp_img_dr = temp_img_dr.replaceAll("data:image/png;base64,", "");
			bt_img_dr = Base64.decodeBase64(temp_img_dr);
			
			try {
				img_dr = date + "_" + email + "_" + title + "_dr.png";
				stream = new FileOutputStream("/home/janginf/tomcat/img/" + img_dr);
				stream.write(bt_img_dr);
				stream.close();
			} catch(Exception e) {
				System.out.println("파일이 정상적으로 넘어오지 않았습니다");
			}
		}
		
		bvo.setWidth(width);
		bvo.setHeight(height);
		bvo.setKind(kind);
		bvo.setBody(body);
		bvo.setDoor(door);
		bvo.setJabara(jabara);
		bvo.setJabara_sub(jabara_sub);
		bvo.setPillar(pillar);
		bvo.setEp(ep);
		bvo.setOption(option);
		bvo.setPosition(position);
		bvo.setImg_no_dr(img_no_dr);
		bvo.setImg_dr(img_dr);
		
		result = dao.saveBuiltin(email, title, bvo);
		
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("result", result);
		jlist.add(map);
		
		return jlist;
	}
	
	public List<Map<String, Object>> getItemStock() {
		BuiltInDAO dao = new BuiltInDAO();
		String item_cd = "";
		if (request.getParameter("item_cd") != null)
			item_cd = request.getParameter("item_cd");
		
		List<StockVO> list = dao.getItemStock(item_cd);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("issue_qty", list.get(i).getIssue_qty());
			map.put("wk_end_dt", list.get(i).getWk_end_dt());
			map.put("sum_wk_ord_qty", list.get(i).getSum_wk_ord_qty());
			map.put("in_min_dt", list.get(i).getIn_min_dt());
			map.put("odr_qty", list.get(i).getOdr_qty());
			jlist.add(map);
		}
		
		return jlist;
	}
}
