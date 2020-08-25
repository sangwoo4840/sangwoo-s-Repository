package com.jangin.wow2d.wardrobe;

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
public class WardrobeService {
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
			mav = wardrobe();
			vo.setPid("w2d_wrb");
			break;
		case 2:
			mav = wrauth();
			vo.setPid("w2d_wrb_au");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView wardrobe() {
		mav.setViewName("wow2d/wardrobe");
		
		return mav;
	}
	
	public List<Map<String, Object>> getWardrobeKind() {
		WardrobeDAO dao = new WardrobeDAO();
		String email = session.getAttribute("dabonda").toString();
		String type = "";
		if (request.getParameter("type") != null)
			type = request.getParameter("type");
		
		List<InfoVO> list = dao.getWardrobeKind(email, type);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for (int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			if (list.get(i).getStatus().equals("Y")) {
				map.put("wr_cd", list.get(i).getWr_cd());
				map.put("name", list.get(i).getName());
			} else if (list.get(i).getStatus().equals("T")) {
				map.put("wr_cd", list.get(i).getWr_cd());
				map.put("name", list.get(i).getName() + "(테스트)");
			}
			
			if (map.get("wr_cd") != null)
				jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getOptionList() {
		WardrobeDAO dao = new WardrobeDAO();
		
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		
		List<ItemVO> list = dao.getOptionList(kind);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for (int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("item_grp", list.get(i).getItem_grp());
			map.put("dp2", list.get(i).getDp2());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("item_nm", list.get(i).getItem_nm());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getItemList() {
		WardrobeDAO dao = new WardrobeDAO();
		WardrobeVO bvo = new WardrobeVO();
		
		String type = "";
		if (request.getParameter("type") != null)
			type = request.getParameter("type");
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
		
		bvo.setType(type);
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
		
		for (int i = 0; i < list.size(); i++) {
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
	
	public List<Map<String, Object>> saveWardrobe(String type) {
		WardrobeDAO dao = new WardrobeDAO();
		int result = 0;
		WardrobeVO bvo = new WardrobeVO();
		
		String filepath = "/home/janginf/tomcat/img/";
//		String filepath = "d:\\";
		
		String email = "";
		if (session.getAttribute("dabonda") != null)
			email = session.getAttribute("dabonda").toString();
		
		String mwow2d = "";
		if (request.getParameter("mwow2d") != null) {
			mwow2d = request.getParameter("mwow2d");
			email = dao.getEmail(mwow2d);
		}
		
		String title = "";
		if (request.getParameter("title") != null)
			title = request.getParameter("title");
		String kind = "";
		String body = "";
		
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String date = sdf.format(calendar.getTime());
		FileOutputStream stream = null;
		
		switch (type) {
		case "sd":
		case "bi":
			int width = 0;
			if (request.getParameter("width") != null)
				width = Integer.parseInt(request.getParameter("width"));
			int height = 0;
			if (request.getParameter("height") != null)
				height = Integer.parseInt(request.getParameter("height"));
			
			if (request.getParameter("kind") != null)
				kind = request.getParameter("kind");
			
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
			
			String temp_img_no_dr = "";
			byte[] bt_img_no_dr = null;
			String img_no_dr = "";
			if (request.getParameter("img_no_dr") != null) {
				temp_img_no_dr = request.getParameter("img_no_dr");
				temp_img_no_dr = temp_img_no_dr.replaceAll("data:image/png;base64,", "");
				bt_img_no_dr = Base64.decodeBase64(temp_img_no_dr);
				
				try {
					img_no_dr = date + "_" + email + "_" + title + "_no_dr.png";
					stream = new FileOutputStream(filepath + img_no_dr);
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
					stream = new FileOutputStream(filepath + img_dr);
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
			
			if (type.equals("sd"))
				result = dao.saveWardrobeSd(email, title, bvo);
			else if (type.equals("bi"))
				result = dao.saveWardrobeBI(email, title, bvo);
			break;
		case "dr":
			int fb_width = 0;
			if (request.getParameter("fb_width") != null)
				fb_width = Integer.parseInt(request.getParameter("fb_width"));
			int lr_width = 0;
			if (request.getParameter("lr_width") != null)
				lr_width = Integer.parseInt(request.getParameter("lr_width"));
			if (request.getParameter("kind") != null)
				kind = request.getParameter("kind");
			if (request.getParameter("body") != null)
				body = request.getParameter("body");
			int dh_qty = 0;
			if (request.getParameter("dh_qty") != null)
				dh_qty = Integer.parseInt(request.getParameter("dh_qty"));
			
			String temp_img_above = "";
			byte[] bt_img_above = null;
			String img_above = "";
			if (request.getParameter("img_above") != null && !request.getParameter("img_above").equals("")) {
				temp_img_above = request.getParameter("img_above");
				temp_img_above = temp_img_above.replaceAll("data:image/png;base64,", "");
				bt_img_above = Base64.decodeBase64(temp_img_above);
				
				try {
					img_above = date + "_" + email + "_" + title + "_above.png";
					stream = new FileOutputStream(filepath + img_above);
					stream.write(bt_img_above);
					stream.close();
				} catch(Exception e) {
					System.out.println("파일이 정상적으로 넘어오지 않았습니다");
				}
			}
			String temp_img_forward = "";
			byte[] bt_img_forward = null;
			String img_forward = "";
			if (request.getParameter("img_forward") != null && !request.getParameter("img_forward").equals("")) {
				temp_img_forward = request.getParameter("img_forward");
				temp_img_forward = temp_img_forward.replaceAll("data:image/png;base64,", "");
				bt_img_forward = Base64.decodeBase64(temp_img_forward);
				
				try {
					img_forward = date + "_" + email + "_" + title + "_forward.png";
					stream = new FileOutputStream(filepath + img_forward);
					stream.write(bt_img_forward);
					stream.close();
				} catch(Exception e) {
					System.out.println("파일이 정상적으로 넘어오지 않았습니다");
				}
			}
			String temp_img_left = "";
			byte[] bt_img_left = null;
			String img_left = "";
			if (request.getParameter("img_left") != null && !request.getParameter("img_left").equals("")) {
				temp_img_left = request.getParameter("img_left");
				temp_img_left = temp_img_left.replaceAll("data:image/png;base64,", "");
				bt_img_left = Base64.decodeBase64(temp_img_left);
				
				try {
					img_left = date + "_" + email + "_" + title + "_left.png";
					stream = new FileOutputStream(filepath + img_left);
					stream.write(bt_img_left);
					stream.close();
				} catch(Exception e) {
					System.out.println("파일이 정상적으로 넘어오지 않았습니다");
				}
			}
			String temp_img_right = "";
			byte[] bt_img_right = null;
			String img_right = "";
			if (request.getParameter("img_right") != null && !request.getParameter("img_right").equals("")) {
				temp_img_right = request.getParameter("img_right");
				temp_img_right = temp_img_right.replaceAll("data:image/png;base64,", "");
				bt_img_right = Base64.decodeBase64(temp_img_right);
				
				try {
					img_right = date + "_" + email + "_" + title + "_right.png";
					stream = new FileOutputStream(filepath + img_right);
					stream.write(bt_img_right);
					stream.close();
				} catch(Exception e) {
					System.out.println("파일이 정상적으로 넘어오지 않았습니다");
				}
			}
			String temp_img_backward = "";
			byte[] bt_img_backward = null;
			String img_backward = "";
			if (request.getParameter("img_backward") != null && !request.getParameter("img_backward").equals("")) {
				temp_img_backward = request.getParameter("img_backward");
				temp_img_backward = temp_img_backward.replaceAll("data:image/png;base64,", "");
				bt_img_backward = Base64.decodeBase64(temp_img_backward);
				
				try {
					img_backward = date + "_" + email + "_" + title + "_backward.png";
					stream = new FileOutputStream(filepath + img_backward);
					stream.write(bt_img_backward);
					stream.close();
				} catch(Exception e) {
					System.out.println("파일이 정상적으로 넘어오지 않았습니다");
				}
			}
			
			bvo.setWidth(fb_width);
			bvo.setHeight(lr_width);
			bvo.setKind(kind);
			bvo.setBody(body);
			bvo.setImg_above(img_above);
			bvo.setImg_forward(img_forward);
			bvo.setImg_left(img_left);
			bvo.setImg_right(img_right);
			bvo.setImg_backward(img_backward);
			
			result = dao.saveWardrobeDR(email, title, bvo, dh_qty);
			break;
		}
		
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("result", result);
		jlist.add(map);
		
		return jlist;
	}
	
	public List<Map<String, Object>> getItemStock() {
		WardrobeDAO dao = new WardrobeDAO();
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
	
	
	
	
	
	private ModelAndView wrauth() {
		mav.setViewName("wow2d/wardrobe_auth");
		
		return mav;
	}
	
	public List<Map<String, Object>> getWrauthAgent() {
		WardrobeDAO dao = new WardrobeDAO();
		String userLevel = dao.getUserLevel(session.getAttribute("dabonda").toString());
		if (userLevel == null || userLevel.equals(""))
			userLevel = "7";
		int level = Integer.parseInt(userLevel);
		
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		if (level > 3) {
			return jlist;
		}
		
		List<AgentVO> list = dao.getWrauthAgent();
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("email", list.get(i).getEmail());
			map.put("name", list.get(i).getName());
			map.put("team", list.get(i).getTeam());
			map.put("agent_cd", list.get(i).getAgent_cd());
			map.put("level", list.get(i).getLevel());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getWrauthKind() {
		WardrobeDAO dao = new WardrobeDAO();
		
		List<AuthVO> list = dao.getWrauthKind();
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("wr_cd", list.get(i).getWr_cd());
			map.put("type", list.get(i).getType());
			map.put("name", list.get(i).getName());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getWrauthAuth() {
		WardrobeDAO dao = new WardrobeDAO();
		
		String email = "";
		if (request.getParameter("email") != null)
			email = request.getParameter("email");
		
		List<AuthVO> list = dao.getWrauthAuth(email);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("wr_cd", list.get(i).getWr_cd());
			map.put("type", list.get(i).getType());
			map.put("name", list.get(i).getName());
			map.put("status", list.get(i).getStatus());
			map.put("auth", list.get(i).getAuth());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> setWrauth() {
		WardrobeDAO dao = new WardrobeDAO();
		
		String email = "";
		if (request.getParameter("email") != null)
			email = request.getParameter("email");
		String auth = "";
		if (request.getParameter("auth") != null)
			auth = request.getParameter("auth");
		String user = session.getAttribute("dabonda").toString();
		
		dao.setWrauth(email, auth, user);
		
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("result", 1);
		jlist.add(map);
		
		return jlist;
	}

	public List<Map<String, Object>> setWrauthAll() {
		WardrobeDAO dao = new WardrobeDAO();
		
		String wr_cd = "";
		if (request.getParameter("wr_cd") != null)
			wr_cd = request.getParameter("wr_cd");
		String addsub = "";
		if (request.getParameter("addsub") != null)
			addsub = request.getParameter("addsub");
		String user = session.getAttribute("dabonda").toString();
		
		dao.setWrauthAll(wr_cd, addsub, user);
	
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("result", 1);
		jlist.add(map);
		
		return jlist;
	}
}
