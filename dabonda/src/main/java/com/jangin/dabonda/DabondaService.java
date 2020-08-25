package com.jangin.dabonda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.servlet.view.RedirectView;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken.Payload;
import com.google.api.client.http.HttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson.JacksonFactory;

@Component
public class DabondaService extends HandlerInterceptorAdapter {
	@Autowired
	private HttpServletRequest request;
	@Autowired
	private HttpSession session;
	@Autowired
	private ModelAndView mav;

	private static final HttpTransport transport = new NetHttpTransport();
	private static final JacksonFactory jsonFactory = new JacksonFactory();
	/*湲곗〈*/
    public static final String CLIENT_ID = "479539257520-j7qnei8qekjs11ito7cleisjac5nmr80.apps.googleusercontent.com";//run(理���)
    /* 濡�而� ���ㅽ��*/
//    public static final String CLIENT_ID = "147482509377-q2e784uunovb9mt7csak5nk2f7bkrh16.apps.googleusercontent.com";
    /* 媛�諛� ���ㅽ��*/
    //public static final String CLIENT_ID = "147482509377-f1qunuibhsfiivhlllv8oavn856elr9f.apps.googleusercontent.com";
													   
	//public static final String CLIENT_ID = "479539257520-6m2ku24jsvjiophjim7k6l5svacv4vkh.apps.googleusercontent.com"; //test(理���)
	
	//private static final String APPS_DOMAIN_NAME = "jangin.com";
	// private static final String ANDROID_CLIENT_ID = "";
	// private static final String IOS_CLIENT_ID = "";
	private String idTokenString;

	@Override
	
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		try {
			String url = request.getRequestURI();
			if (request.getSession().getAttribute("dabonda") == null) {
				response.sendRedirect("/");

				String errorCode;
				if (session.getAttribute("errorCode") == null)
					errorCode = "";
				else
					errorCode = session.getAttribute("errorCode").toString();
				switch (errorCode) {
				case "sso001":
					session.setAttribute("errorMsg", "沅����� ���� �ъ�⑹��������.");
					break;
				case "sso002":
					session.setAttribute("errorMsg", "�μ�멸�援� 怨����� ��������.");
					break;
				case "sso003":
					session.setAttribute("errorMsg", "�������� ��洹쇱�� ��������.");
					break;
				default:
					session.setAttribute("errorMsg", "濡�洹몄�몄�� �����⑸����.");
					break;
				}
				session.setMaxInactiveInterval(1);

				return false;
			} else if (!url.equals("/index")) {
				DabondaDAO dao = new DabondaDAO();

				String email = session.getAttribute("dabonda").toString();

				if (url.indexOf("/", 1) > 0) {
					url = url.substring(0, url.indexOf("/", 1));
				}
				boolean access = false;
				List<UserVO> list = dao.selectProgram(email);
				for (int i = 0; i < list.size(); i++) {
					if (url.equals(list.get(i).getUrl()))
						access = true;
				}

				if (!access) {
					response.sendRedirect("/index");
					return false;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return true;
	}

	public ModelAndView execute(int index) {
		switch (index) {
		case 1:
			mav = login();
			break;
		case 2:
			mav = logout();
			break;
		case 3:
			mav = index();
			break;
		case 4:
			mav = user();
			break;
		case 5:
			mav = insertUser();
			break;
		case 6:
			mav = deleteUser();
			break;
		case 7:
			mav = updateAuth();
			break;
		case 8:
			mav = userInfo();
			break;
		}

		return mav;
	}

	private ModelAndView login() {
		try {
			GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(
					transport, jsonFactory).setAudience(
					Arrays.asList(CLIENT_ID)).build();

			idTokenString = request.getParameter("idtoken");
//			System.out.println("idTokenString : " + idTokenString);
			GoogleIdToken idToken = verifier.verify(idTokenString);
//			System.out.println("idToken : " + idToken);
			if (idToken != null) {
				Payload payload = idToken.getPayload();
				// System.out.println("payload.getHostedDomain() : " +
				// payload.getHostedDomain());
				// System.out.println("APPS_DOMAIN_NAME : " + APPS_DOMAIN_NAME);
				//2015-12-01// -> ��由ъ�� 異�媛�
				//2015-12-01//String hostedDomain = payload.getHostedDomain(); 
				//2015-12-01//if (hostedDomain == null)
				//2015-12-01//hostedDomain = "";
				//2015-12-01//if (hostedDomain.equals(APPS_DOMAIN_NAME)
				// If multiple clients access the backend server:
				/*
				 * && Arrays.asList(ANDROID_CLIENT_ID, IOS_CLIENT_ID)
				 * .contains(payload.getAuthorizedParty())
				 *///2015-12-01//) {
					// System.out.println("User ID: " + payload.getSubject());
					DabondaDAO dao = new DabondaDAO();
					String email = payload.get("email").toString();
					
					List<UserVO> list = dao.selectProgram(email);
					if (list.get(0).getPid() != null) {
						HttpServletRequest req = ((ServletRequestAttributes) RequestContextHolder
								.currentRequestAttributes()).getRequest();
						session.setAttribute("dabonda", email);
						//session.setAttribute("client_id", CLIENT_ID);
						session.setMaxInactiveInterval(10800);

						String ip = req.getHeader("X-FORWARDED-FOR");
						if (ip == null)
							ip = req.getRemoteAddr();
						UserVO vo = new UserVO();
						vo.setEmail(email);
						vo.setIp_addr(ip);
						vo.setSession_id(session.getId());
						vo.setOs(request.getParameter("os"));
						vo.setBrowser(request.getParameter("browser"));

						if(!email.equals("shkang@jangin.com"))
						dao.insertLog(vo);

						mav.addObject("menu", createMenu(list));
					} else {
						session.setAttribute("errorCode", "sso001");
					}
					//2015-12-01//} else {
					// System.out.println("Invalid ID token(domain is different).");
					//2015-12-01//session.setAttribute("errorCode", "sso002");
					//2015-12-01//}
			} else {
				// System.out.println("Invalid ID token(token is null).");
				session.setAttribute("errorCode", "sso003");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return mav;
	}

	private String createMenu(List<UserVO> list) {
		StringBuilder html = new StringBuilder();

		for (int i = 0; i < list.size(); i++) {
			if (i == 0
					|| (i != 0 && !list.get(i).getPid().substring(0, 3)
							.equals(list.get(i - 1).getPid().substring(0, 3)))) {
				switch (list.get(i).getPid().substring(0, 3)) {
				case "adm":
					html.append("<div class='col-1-1 mobile-col-1-1 center'><div class='content ititle adm'>愿�由ъ��</div></div>");
					break;
				case "w2d":
					html.append("<div class='col-1-1 mobile-col-1-1 center'><div class='content ititle w2d'>WOW2D</div></div>");
					break;
				case "mis":
					html.append("<div class='col-1-1 mobile-col-1-1 center'><div class='content ititle mis'>MIS</div></div>");
					break;
				case "rsc":
					html.append("<div class='col-1-1 mobile-col-1-1 center'><div class='content ititle rsc'>�ㅻЦ議곗��</div></div>");
					break;
				case "utl":
					html.append("<div class='col-1-1 mobile-col-1-1 center'><div class='content ititle utl'>UTILITY</div></div>");
					break;
				}
			}

			html.append("<div class='col-6-12 mobile-col-6-12 center'>");
			html.append("<div class='content txtmenu'><a href='");
			if (list.get(i).getUrl().contains("http")) {
				html.append(list.get(i).getUrl());
				html.append("' onclick='accessLog(\"");
				html.append(list.get(i).getPid());
				html.append("\")'><img src='");
			} else {
				html.append(list.get(i).getUrl());
				html.append("'><img src='");
			}
			html.append(list.get(i).getIcon());
			html.append("'/></a><br />");
			html.append(list.get(i).getMenu());
			html.append("</div>");
			html.append("</div>");
		}

		return html.toString();
	}

	private ModelAndView logout() {
		session.invalidate();
		RedirectView rv = new RedirectView("/");
		rv.setExposeModelAttributes(false);
		mav.setView(rv);

		return mav;
	}

	private ModelAndView index() {
		DabondaDAO dao = new DabondaDAO();
		String email = session.getAttribute("dabonda").toString();
		List<UserVO> list = dao.selectProgram(email);
		mav.addObject("menu", createMenu(list));
		mav.addObject("client_id", CLIENT_ID);
		mav.setViewName("index");

		return mav;
	}

	private ModelAndView user() {
		mav.setViewName("user");
		return mav;
	}

	public List<Map<String, Object>> getUserList() {
		DabondaDAO dao = new DabondaDAO();
		
		List<UserVO> list = dao.getUserList();
		List<Map<String, Object>> jlist = new ArrayList<Map<String,Object>>();
		Map<String, Object> map;
		
		for(int i = 0; i < list.size(); i++) {
			map = new HashMap<String, Object>();
			map.put("team", list.get(i).getTeam());
			map.put("email", list.get(i).getEmail());
			map.put("name", list.get(i).getName());
			jlist.add(map);
		}
		
		return jlist;
	}

	private ModelAndView insertUser() {
		DabondaDAO dao = new DabondaDAO();
		UserVO vo = new UserVO();
		vo.setEmail(request.getParameter("email"));
		vo.setName(request.getParameter("name"));
		vo.setTeam(request.getParameter("team"));
		dao.insertUser(vo);
		return mav;
	}

	private ModelAndView deleteUser() {
		DabondaDAO dao = new DabondaDAO();
		String email = request.getParameter("email");
		email += "@jangin.com";
		dao.deleteUser(email);
		return mav;
	}

	private ModelAndView updateAuth() {
		DabondaDAO dao = new DabondaDAO();
		UserVO vo = new UserVO();
		vo.setEmail(request.getParameter("email"));
		vo.setPid(request.getParameter("auth"));
		
		dao.updateAuth(vo);
		return mav;
	}

	private ModelAndView userInfo() {
		DabondaDAO dao = new DabondaDAO();
		StringBuilder html = new StringBuilder();
		String email = request.getParameter("email");
		UserVO vo = dao.selectUser(email);
		List<UserVO> plist = dao.selectAllProgram();
		List<UserVO> ulist = dao.selectProgram(email);
		
		html.append("<div id='top'>");
		html.append("<div class='grid grid-pad'>");
		html.append("<div class='col-3-12 mobile-col-3-12'>");
		html.append("<div class='content'>�대���</div>");
		html.append("</div>");
		html.append("<div class='col-9-12 mobile-col-9-12'>");
		html.append("<div class='content'>");
		html.append(vo.getEmail());
		html.append("</div></div></div>");
		html.append("<div class='grid grid-pad'>");
		html.append("<div class='col-3-12 mobile-col-3-12'>");
		html.append("<div class='content'>�대�</div>");
		html.append("</div>");
		html.append("<div class='col-9-12 mobile-col-9-12'>");
		html.append("<div class='content'>");
		html.append(vo.getName());
		if(!vo.getTeam().equals("")) {
			html.append(" (");
			html.append(vo.getTeam());
			html.append(")");
		}
		html.append("</div></div></div>");
		html.append("<hr>");
		html.append("</div>");
		html.append("<div id='content'>");
		html.append("<div class='grid grid-pad'>");
		for(int i = 0; i < plist.size(); i++) {
			boolean checked = false;
			html.append("<div class='col-1-12 mobile-col-1-12'>");
			html.append("<div class='content'><input type='checkbox' name='pid' id='");
			html.append(plist.get(i).getPid());
			for(int j = 0; j < ulist.size(); j++) {
				if(plist.get(i).getPid().equals(ulist.get(j).getPid()))
					checked = true;
			}
			if(checked)
				html.append("' checked></div>");
			else 
				html.append("'></div>");
			html.append("</div>");
			html.append("<div class='col-5-12 mobile-col-5-12'>");
			html.append("<div class='content'><label for='");
			html.append(plist.get(i).getPid());
			html.append("'>");
			html.append(plist.get(i).getMenu());
			html.append("</label></div>");
			html.append("</div>");
		}
		html.append("</div>");
		html.append("<div class='col-1-1 mobile-col-1-1'>");
		html.append("<div class='content' style='text-align: center;'><a href=\"javascript: updateauth('");
		html.append(vo.getEmail());
		html.append("');\">����</a>");
		html.append("</div></div></div>");
		
		mav.addObject("userinfo", html.toString());
		mav.setViewName("userInfo");
		return mav;
	}
	
	
	
	
	
	
	public void accessLog() {
		DabondaDAO dao = new DabondaDAO();
		LogVO vo = new LogVO();
		String pid = "unknown";
		
		if (request.getParameter("pid") != null)
			pid = request.getParameter("pid");
		
		vo.setEmail(session.getAttribute("dabonda").toString());
		vo.setPid(pid);
		dao.insertLog(vo);
	}
}
