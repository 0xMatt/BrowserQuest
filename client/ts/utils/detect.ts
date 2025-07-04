export class Detect {
  static supportsWebSocket() {
    // return window.WebSocket || window.MozWebSocket;
  };

  static userAgentContains(value: string) {
    return navigator.userAgent.indexOf(value) !== -1;
  };

  static isTablet(screenWidth) {
    if (screenWidth > 640) {
      if ((this.userAgentContains('Android') && this.userAgentContains('Firefox'))
        || this.userAgentContains('Mobile')) {
        return true;
      }
    }
    return false;
  };

  static isWindows() {
    return this.userAgentContains('Windows');
  }

  static isChromeOnWindows() {
    return this.userAgentContains('Chrome') && this.userAgentContains('Windows');
  };

  static canPlayMP3() {
    // return Modernizr.audio.mp3;
      return true;
  };

  static isSafari() {
    return this.userAgentContains('Safari') && !this.userAgentContains('Chrome');
  };

  static isOpera() {
    return this.userAgentContains('Opera');
  };
}
