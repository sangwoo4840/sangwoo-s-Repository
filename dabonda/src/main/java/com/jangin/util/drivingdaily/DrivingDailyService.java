package com.jangin.util.drivingdaily;

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

import com.jangin.dabonda.DabondaDAO;
import com.jangin.dabonda.LogVO;

@Component
public class DrivingDailyService {
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
			mav = drivingdaily();
			vo.setPid("utl_drd");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView drivingdaily() {
		DrivingDailyDAO dao = new DrivingDailyDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(calendar.getTime());
		String email = session.getAttribute("dabonda").toString();

		DrivingDailyVO vo = new DrivingDailyVO();
		if (request.getParameter("action") != null && request.getParameter("action").equals("save")) {
			date = request.getParameter("date");
			vo.setModel(request.getParameter("model"));
			vo.setNumber(request.getParameter("number"));
			vo.setBefore_mileage(Integer.parseInt(request.getParameter("before_mileage")));
			vo.setAfter_mileage(Integer.parseInt(request.getParameter("after_mileage")));
			vo.setTotal_mileage(Integer.parseInt(request.getParameter("total_mileage")));
			vo.setCommute(Integer.parseInt(request.getParameter("commute")));
			vo.setBusiness(Integer.parseInt(request.getParameter("business")));
			vo.setRemark(request.getParameter("remark"));
			
			dao.setDrivingdaily(email, date, vo);
		}
		
		mav.addObject("date", date);
		
		vo = dao.getDrivingdaily(email, date);
		if (vo == null) {
			mav.addObject("data", "N");
		} else {
			mav.addObject("data", "Y");
			mav.addObject("model", vo.getModel());
			mav.addObject("number", vo.getNumber());
			mav.addObject("before_mileage", vo.getBefore_mileage());
			mav.addObject("after_mileage", vo.getAfter_mileage());
			mav.addObject("total_mileage", vo.getTotal_mileage());
			mav.addObject("commute", vo.getCommute());
			mav.addObject("business", vo.getBusiness());
			mav.addObject("remark", vo.getRemark());
		}
		
		mav.setViewName("util/drivingdaily");
		return mav;
	}
	
	public List<Map<String, Object>> getDrivingdaily() {
		DrivingDailyDAO dao = new DrivingDailyDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");

		String email = session.getAttribute("dabonda").toString();
		DrivingDailyVO vo = dao.getDrivingdaily(email, date.replace("'", "''"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		map = new HashMap<String, Object>();
		map.put("model", vo.getModel());
		map.put("number", vo.getNumber());
		map.put("before_mileage", vo.getBefore_mileage());
		map.put("after_mileage", vo.getAfter_mileage());
		map.put("total_mileage", vo.getTotal_mileage());
		map.put("commute", vo.getCommute());
		map.put("business", vo.getBusiness());
		map.put("remark", vo.getRemark());
		jlist.add(map);
		
		return jlist;
	}
	
	public List<Map<String, Object>> getDrivingdailyList() {
		DrivingDailyDAO dao = new DrivingDailyDAO();

		String email = session.getAttribute("dabonda").toString();
		List<DrivingDailyVO> list = dao.getDrivingdailyList(email);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for (int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("date", list.get(i).getDate());
			map.put("before_mileage", list.get(i).getBefore_mileage());
			map.put("after_mileage", list.get(i).getAfter_mileage());
			jlist.add(map);
		}
		
		return jlist;
	}
}
