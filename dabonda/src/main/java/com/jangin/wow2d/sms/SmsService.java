package com.jangin.wow2d.sms;

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
public class SmsService {
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
			vo.setPid("w2d_sms");
			break;
		}
		if (vo.getPid() != null)
			dao.insertLog(vo);

		return mav;
	}
	
	private ModelAndView stock() {
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String date = sdf.format(calendar.getTime());
		
		mav.addObject("date", date);
		mav.setViewName("wow2d/sms");
		return mav;
	}
	
	public List<Map<String, Object>> getSmsList() {
		SmsDAO dao = new SmsDAO();
		SmsVO svo = new SmsVO();
		Calendar calendar = Calendar.getInstance();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String send_dt;
		if(request.getParameter("send_dt") == null)
			send_dt = sdf.format(calendar.getTime());
		else
			send_dt = request.getParameter("send_dt");
		String success_chk;
		if(request.getParameter("success_chk") == null)
			success_chk = "A";
		else
			success_chk = request.getParameter("success_chk");
		String agent_nm;
		if(request.getParameter("agent_nm") == null)
			agent_nm = "";
		else
			agent_nm = request.getParameter("agent_nm");
		
		svo.setSend_dt(send_dt);
		svo.setSuccess_chk(success_chk);
		svo.setAgent_nm(agent_nm);
		List<SmsVO> list = dao.getSmsList(svo);
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("so_no", "SN" + list.get(i).getSo_no().substring(10));
			map.put("send_dt", list.get(i).getSend_dt().length() > 0 ? list.get(i).getSend_dt().substring(11) : "");
			map.put("success_chk", list.get(i).getSuccess_chk());
			map.put("so_delete_chk", list.get(i).getSo_delete_chk());
			map.put("agent_nm", list.get(i).getAgent_nm());
			map.put("cust_nm", list.get(i).getCust_nm());
			map.put("cust_tel", list.get(i).getCust_tel());
			map.put("sms_type", list.get(i).getSms_type());
			jlist.add(map);
		}
		
		return jlist;
	}
}
