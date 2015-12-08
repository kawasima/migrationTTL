var tts = WScript.CreateObject("SAPI.SpVoice");
var args = WScript.arguments;

tts.Speak(args(0));
