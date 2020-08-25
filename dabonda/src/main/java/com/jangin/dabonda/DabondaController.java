package com.jangin.dabonda;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

/**
 * Handles requests for the application home page.
 */
@Controller
public class DabondaController {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private ModelAndView mav;
	@Autowired
	private DabondaService dabonda;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home(HttpSession session) {
		//session.setAttribute("client_id", DabondaService.CLIENT_ID);
		if(session.getAttribute("dabonda") == null) {
			mav =  new ModelAndView("home");
		} else {
			RedirectView rv = new RedirectView("/index");
			rv.setExposeModelAttributes(false);
			mav.setView(rv);
		}
		mav.addObject("client_id", DabondaService.CLIENT_ID);
		
		return mav;
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login() {
		mav = dabonda.execute(1);
		return mav;
	}
	
	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView logout() {
		mav = dabonda.execute(2);
		return mav;
	}
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public ModelAndView index() {
		mav = dabonda.execute(3);
		return mav;
	}
	
	
	// 사용자 관리
	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ModelAndView user() {
		mav = dabonda.execute(4);
		return mav;
	}
	
	@RequestMapping(value = "/user/user.json", method = RequestMethod.GET)
	public @ResponseBody Map<?, ?> getUserList(ModelMap model) {
		model.put("user", dabonda.getUserList());
		return model;
	}
	
	@RequestMapping(value = "/user/insertuser", method = RequestMethod.GET)
	public ModelAndView insertUser() {
		mav = dabonda.execute(5);
		return mav;
	}
	
	@RequestMapping(value = "/user/deleteuser", method = RequestMethod.GET)
	public ModelAndView deleteUser() {
		mav = dabonda.execute(6);
		return mav;
	}
	
	@RequestMapping(value = "/user/updateauth", method = RequestMethod.GET)
	public ModelAndView updateAuth() {
		mav = dabonda.execute(7);
		return mav;
	}
	
	@RequestMapping(value = "/user/userinfo", method = RequestMethod.GET)
	public ModelAndView userInfo() {
		mav = dabonda.execute(8);
		return mav;
	}
	
	
	// 로그
	@RequestMapping(value = "/log", method = RequestMethod.GET)
	public void accessLog() {
		dabonda.accessLog();
	}
	
	// 에러페이지
	@RequestMapping(value = "/errors/404", method = RequestMethod.GET)
	public String error404() {
		return "redirect:/";
	}
}
