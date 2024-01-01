import React from 'react';

const SoundCloudWidget2 = () => {
  const src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1693249398&color=%23111111&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        
            
 
  return (
    <div className=" items-center font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 50;">
    <iframe 
      width="20%" 
      height="75" 
      scrolling="yes" 
      frameborder="yes" 
      allow="autoplay"
      src={src}
    />
    </div>
  );
};

export default SoundCloudWidget2;