import React from "react";
import Button from "../button";
import HorizontalLine from "../divider";
import Input from "../input";
import { Ul, Footer1, Footer2, FooterDiv, FooterWraper } from "./footer.styles";
import { FB, Linkedin, Instagram } from "./icons";

const footerDetails = [
  {
    title: "Shop",
    list: [
      "Computers",
      "Phones & tablets",
      "Gaming & VR",
      "Audio & Music",
      "Wearables",
    ],
  },
  {
    title: "black",
    list: [
      "Wearables",
      "Home entertainment",
      " E-mobility",
      "Special products",
      "All categories",
    ],
  },
  {
    title: "LL",
    list: ["About us", "How it works", "Careers", "Investors", "LL care"],
  },
  {
    title: "Help",
    list: [
      "+971 5857 05790",
      "help@ll.com",
      "FAQ’s",
      "Returns policy",
      " Contact us",
    ],
  },
];

const Footer = () => {
  return (
    <FooterWraper>
      <FooterDiv>
        <Footer1>
          {footerDetails.map((item, idx) => (
            <Ul>
              <div>{item.title}</div>
              {item.list.map((list) => (
                <li>{list}</li>
              ))}
            </Ul>
          ))}

          <Ul>
            <div>Be in the know</div>
            <li style={{ lineHeight: "15px", margin: "15px 0" }}>
              Get the latest products, promotions, and design tips in your
              inbox.{" "}
            </li>

            <div className="btn">
              <Input fullwitdth placeholder={"Email address"} />
            </div>
            <div className="">
              <Button fullwitdth buttonText="Subscribe" />
              {/* <Button fullwitdth secondary buttonText="Subscribe" /> */}
            </div>
          </Ul>
        </Footer1>
        <HorizontalLine style={{ opacity: 0.1 }} color={"#fff"} />

        <Footer2>
          <span>© 2022-2022 LL | Privacy · Terms · Sitemap</span>
          <div className="social">
            <span>Follow us on</span>
            <FB />
            <Linkedin />
            <Instagram />
          </div>
        </Footer2>
      </FooterDiv>
    </FooterWraper>
  );
};

export default Footer;
