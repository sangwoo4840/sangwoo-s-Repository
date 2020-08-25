package com.jangin.wow2d.slide;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.ModelAndView;

import com.jangin.dabonda.DabondaDAO;
import com.jangin.dabonda.LogVO;

@Component
public class SlideService {
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
			mav = slide();
			vo.setPid("w2d_sld");
			break;
		case 2:
			mav = slideManage();
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView slide() {
		mav.setViewName("wow2d/slide");
		
		return mav;
	}
	
	public List<Map<String, Object>> getBasic() {
		SlideDAO dao = new SlideDAO();
		String email = "";
		if (session.getAttribute("dabonda") != null)
			email = session.getAttribute("dabonda").toString();
		List<BasicVO> list = dao.getBasic(email);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("type", list.get(i).getType());
			map.put("title", list.get(i).getTitle());
			map.put("kind", list.get(i).getKind());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getOptionList() {
		SlideDAO dao = new SlideDAO();
		SlideVO svo = new SlideVO();
		
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		
		svo.setKind(kind);
		
		List<ItemVO> list = dao.getOptionList(svo);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("dp2", list.get(i).getDp2());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("factory_price", list.get(i).getFactory_price());
			map.put("retail_price", list.get(i).getRetail_price());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	public List<Map<String, Object>> getSlideInfo() {
		SlideDAO dao = new SlideDAO();
		SlideVO svo = new SlideVO();
		
		int width = 0;
		if (request.getParameter("width") != null)
			width = Integer.parseInt(request.getParameter("width"));
		int height = 0;
		if (request.getParameter("height") != null)
			height = Integer.parseInt(request.getParameter("height"));
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		
		svo.setWidth(width);
		svo.setHeight(height);
		svo.setKind(kind);
		
		InfoVO ivo = dao.getSlideInfo(svo);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("body", ivo.getBody());
		map.put("jabara", ivo.getJabara());
		map.put("pillar", ivo.getPillar());
		jlist.add(map);
		
		return jlist;
	}
	
	public List<Map<String, Object>> getItemList() {
		SlideDAO dao = new SlideDAO();
		SlideVO svo = new SlideVO();
		
		int width = 0;
		if (request.getParameter("width") != null)
			width = Integer.parseInt(request.getParameter("width"));
		int height = 0;
		if (request.getParameter("height") != null)
			height = Integer.parseInt(request.getParameter("height"));
		String kind = "";
		if (request.getParameter("kind") != null)
			kind = request.getParameter("kind");
		String bodyLR = "";
		if (request.getParameter("bodyLR") != null)
			bodyLR = request.getParameter("bodyLR");
		String pillarLR = "";
		if (request.getParameter("pillarLR") != null)
			pillarLR = request.getParameter("pillarLR");
		
		svo.setWidth(width);
		svo.setHeight(height);
		svo.setKind(kind);
		svo.setBodyLR(bodyLR);
		svo.setPillarLR(pillarLR);
		
		List<ItemVO> list = dao.getItemList(svo);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("dp1", list.get(i).getDp1());
			map.put("dp2", list.get(i).getDp2());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("qty", list.get(i).getQty());
			map.put("factory_price", list.get(i).getFactory_price());
			map.put("factory_amt", list.get(i).getFactory_amt());
			map.put("retail_price", list.get(i).getRetail_price());
			map.put("retail_amt", list.get(i).getRetail_amt());
			jlist.add(map);
		}
		
		return jlist;
	}
	
	private ModelAndView slideManage() {
		mav.setViewName("wow2d/slideManage");
		
		return mav;
	}
	
	public List<Map<String, Object>> slideStore() {
		SlideDAO dao = new SlideDAO();
		int result = 0;
		SlideVO svo = new SlideVO();
		
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
		String bodyLR = "";
		if (request.getParameter("bodyLR") != null)
			bodyLR = request.getParameter("bodyLR");
		String pillarLR = "";
		if (request.getParameter("pillarLR") != null)
			pillarLR = request.getParameter("pillarLR");
		
		svo.setWidth(width);
		svo.setHeight(height);
		svo.setKind(kind);
		svo.setBodyLR(bodyLR);
		svo.setPillarLR(pillarLR);
		
		String items = "";
		String[] item;
		StringTokenizer st;
		List<ItemVO> list = new ArrayList<ItemVO>();
		ItemVO vo;
		if (request.getParameter("items") != null) {
			items = request.getParameter("items");
			st = new StringTokenizer(items, ";");
			
			while (st.hasMoreTokens()) {
				item = st.nextToken().split(",");
				vo = new ItemVO();
				vo.setItem_cd(item[0]);
				vo.setQty(Integer.parseInt(item[1]));
				list.add(vo);
			}
			
			result = dao.slideStore(email, title, svo, list);
		}
		
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("result", result);
		jlist.add(map);
		
		return jlist;
	}
	
	public List<Map<String, Object>> slideLoad() {
		SlideDAO dao = new SlideDAO();
		
		String email = "";
		if (session.getAttribute("dabonda") != null)
			email = session.getAttribute("dabonda").toString();
		String title = "";
		if (request.getParameter("title") != null)
			title = request.getParameter("title");
		
		List<SlideVO> list = dao.getSlideLoad(email, title);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("caption", list.get(i).getCaption());
			map.put("kind", list.get(i).getKind());
			map.put("width", list.get(i).getWidth());
			map.put("height", list.get(i).getHeight());
			map.put("body_lr", list.get(i).getBodyLR());
			map.put("pillar_lr", list.get(i).getPillarLR());
			map.put("item_cd", list.get(i).getItem_cd());
			map.put("qty", list.get(i).getQty());
			jlist.add(map);
		}
		
		return jlist;
	}
}
