import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const TalkToChat = () => {
      useEffect(() => {
            const s1 = document.createElement("script");
            const s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/65200ed26fcfe87d54b72837/1hc2jjqf2';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        
            return () => {
              // Cleanup the script when the component is unmounted
              s1.parentNode.removeChild(s1);
            };
          }, []); // Empty dependency array to run the effect only once
      return (
            <div>
                  <Helmet><title>Live Chat</title></Helmet>
            </div>
      );
};

export default TalkToChat;