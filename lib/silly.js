var seriousRooms = (process.env.HUBOT_SERIOUS_ROOMS || '').split(',');

module.exports = function(msg){
  var originalSend = msg.send;
  msg.send = function(){
    if(!!~serious.indexOf(this.message.room)){
      console.log('intercepted message : ' + Array.prototype.slice.call(arguments).join(',') + ', not silly enough.');
    } else {
      return originalSend.apply(this,arguments);
    }
  }
  return msg;
}