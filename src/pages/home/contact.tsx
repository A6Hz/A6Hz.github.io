import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const contactList = [
  {
    type: "Phone",
    value: "+58(412)-7774-88",
    icon: PhoneAndroidIcon,
  },
  {
    type: "Whatsapp",
    value: "+58(412)-7774-88",
    icon: WhatsAppIcon,
  },
  {
    type: "Github",
    value: "http://github.com",
    icon: GitHubIcon,
  },
  {
    type: "Email",
    value: "a05j96@gmail.com",
    icon: EmailIcon,
  },
];

export function Contact() {
  return (
    <>
      <div
        id="contact"
        style={{
          backgroundColor: "#fff",
          padding: 30,
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.01, 1.02, 1.01, 1],
                borderRadius: ["50%", "45%", "40%", "47%", "50%"],
              }}
              className="social-cicle-border"
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.5, 0.7, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <div className="social-cicle">
                <h1 className="social-title">SOCIAL</h1>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={3}>
              {contactList.map((contact, key) => (
                <Grid item xs={12} sm={6} md={12} lg={12} key={key}>
                  <div className="social-card-container ">
                    <div className="social-card-icon">
                      {
                        <contact.icon
                          style={{
                            fontSize: 50,
                            color: "#fff",
                            position: "relative",
                          }}
                        />
                      }
                    </div>
                    <div style={{ display: "inline-block", marginLeft: 15 }}>
                      <p
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                          fontSize: 20,
                          margin: 1,
                        }}
                      >
                        {contact.type}
                      </p>
                      <p style={{ color: "gray", textOverflow: "wrap" }}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
