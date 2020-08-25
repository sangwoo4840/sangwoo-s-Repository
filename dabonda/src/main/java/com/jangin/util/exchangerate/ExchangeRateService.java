package com.jangin.util.exchangerate;

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
public class ExchangeRateService {
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
			mav = exchangerate();
			vo.setPid("utl_exr");
			break;
		case 2:
			mav = exchangerate_dtl();
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView exchangerate() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");
		
		mav.addObject("date", date);
		mav.setViewName("util/exchangerate");
		return mav;
	}
	
	public List<Map<String, Object>> create_exchange() {
		ExchangeRateDAO dao = new ExchangeRateDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");

		List<ExchangeRateVO> list = dao.selectExchange(date.replace("'", "''"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		if (list != null) {
			for (ExchangeRateVO vo : list) {
				map = new HashMap<String, Object>();
				map.put("date", vo.getDate());
				map.put("USD", vo.getUSD());
				map.put("EUR", vo.getEUR());
				map.put("JPY", vo.getJPY());
				map.put("datetime", vo.getDatetime());
				jlist.add(map);
			}
		}
		
		return jlist;
	}
	
	private ModelAndView exchangerate_dtl() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");
		
		mav.addObject("date", date);
		mav.setViewName("util/exchangerate_dtl");
		return mav;
	}
	
	public List<Map<String, Object>> create_exchange_dtl() {
		ExchangeRateDAO dao = new ExchangeRateDAO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date;
		if(request.getParameter("date") == null)
			date = sdf.format(calendar.getTime());
		else
			date = request.getParameter("date");

		List<ExchangeRateVO> list = dao.selectExchange_dtl(date.replace("'", "''"));
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		if (list != null) {
			for (ExchangeRateVO vo : list) {
				map = new HashMap<String, Object>();
				map.put("date", vo.getDate());
				map.put("USD", vo.getUSD());
				map.put("EUR", vo.getEUR());
				map.put("JPY", vo.getJPY());
				jlist.add(map);
			}
		}
		
		return jlist;
	}
}
