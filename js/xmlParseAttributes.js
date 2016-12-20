// Dictionary holding the parsing specs for all the websites
var xmlParseAttributes =
{
  "parse-xkcd":   {
    "url": "http://xkcd.com/",
    "randomUrl": "http://c.xkcd.com/random/comic/",
    "preStr": "http:",
    "imgElement": "#comic img",
    "randomImgElement": "#comic img"                     
  },
  "parse-explosm": {
    "url": "http://explosm.net/",
    "randomUrl": "http://explosm.net/comics/random/",
    "preStr": "http:",
    "imgElement": "#featured-comic",
    "randomImgElement": "#main-comic",
    "scaleImage": "scale(1)"
  },
  "parse-poorly": {
    "url": "http://poorlydrawnlines.com/",
    "randomUrl": "http://poorlydrawnlines.com/?random",
    "preStr": "",
    "imgElement": ".post img",
    "randomImgElement": ".post img"          
  },
  "parse-dirk":   {
    "url": "http://www.dirksbigbunnies.com/",
    "preStr": "",
    "imgElement": ".cartoon:last"       
  },
  "parse-geekandpoke":   {
    "url": "http://geek-and-poke.com/",
    "preStr": "",
    "imgElement": ".image-block-wrapper:first img"                  
  },
  "parse-awkwardzombie":   {
    "url": "http://www.awkwardzombie.com/",
    "preStr": "",
    "imgElement": "#comic img"           
  },
  "parse-smbc":   {
    "url": "http://www.smbc-comics.com/index.php",
    "randomUrl": "http://www.smbc-comics.com/random.php",
    "preStr": "",
    "imgElement": "#cc-comic",
    "randomImgElement": "#cc-comic"                        
  },
  "parse-incidental":   {
    "url": "http://www.incidentalcomics.com/",
    "preStr": "",
    "imgElement": ".separator:first a img"                       
  },
  "parse-awkwardyeti":   {
    "url": "http://theawkwardyeti.com/",
    "randomUrl": "http://theawkwardyeti.com/?random&nocache=1",
    "preStr": "",
    "imgElement": "#comic img",
    "randomImgElement": "#comic img"                     
  },
  "parse-doghouse":   {
    "url": "http://www.thedoghousediaries.com/",
    "preStr": "http://thedoghousediaries.com/",
    "imgElement": "#imgdiv img"                   
  },
  "parse-dailykitten": {
    "url": "http://dailykitten.com/",
    "preStr": "",
    "imgElement": ".wp-post-image:first",
    "scaleImage": "scale(1)"
  }
  // "parse-abtrusegoose":   {
  //                   "url": "http://abstrusegoose.com/",
  //                   "preStr": "",
  //                   "imgElement": "section",
  //                   "scaleImage": "scale(1)"                            
  // }
  // "parse-oatmeal": {
  //                   "url": "http://theoatmeal.com/feed/random/",
  //                   "preStr": "",
  //                   "imgElement": ".ghost img",
  //                   "scaleImage": "scale(1)"             
  // }
};