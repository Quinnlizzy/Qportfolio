import React from 'react';

const SoundCloudWidget1 = () => {
  const src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1690026849&color=%23f8eacb&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
 /* <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-675036260" title="Pilch" target="_blank" style="color: #cccccc; text-decoration: none;">Pilch</a> · <a href="https://soundcloud.com/user-675036260/jerry-finn" title="Jerry Finn" target="_blank" style="color: #cccccc; text-decoration: none;">Jerry Finn</a></div>";*/

  return (
    <div className="font-size: 10px; color: #000000;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 50;">
    <iframe 
      width="100%" 
      height="75" 
      scrolling="no" 
      frameborder="yes" 
      allow="autoplay"
      src={src}
    />
    </div>
  );
};

export default SoundCloudWidget1;