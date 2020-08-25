package com.jangin.wow2d.car;

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
public class CarService {
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
			mav = car();
			vo.setPid("w2d_car");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView car() {
		Calendar calendar = Calendar.getInstance();
		if (calendar.get(Calendar.HOUR_OF_DAY) < 12)
			calendar.add(Calendar.DATE, 2);
		else 
			calendar.add(Calendar.DATE, 3);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(calendar.getTime());
		
		mav.addObject("date", date);
		mav.setViewName("wow2d/car");
		
		return mav;
	}
	
	public List<Map<String, Object>> searchCar() {
		CarDAO dao = new CarDAO();
		Calendar calendar = Calendar.getInstance();
		if (calendar.get(Calendar.HOUR_OF_DAY) < 12)
			calendar.add(Calendar.DATE, 2);
		else 
			calendar.add(Calendar.DATE, 3);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(calendar.getTime());
		List<CarVO> list = dao.selectCar(request.getParameter("tranDt") == null ? date : request.getParameter("tranDt"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("car_no", list.get(i).getCar_no());
			map.put("team_no", list.get(i).getTeam_no());
			map.put("ampm", list.get(i).getAmpm());
			map.put("tran_size", list.get(i).getTran_size());
			map.put("car_size", list.get(i).getCar_size());
			map.put("deadline", list.get(i).getDeadline());
			jlist.add(map);
		}
		
		return jlist;
	}
}
