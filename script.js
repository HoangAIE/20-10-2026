/**
 * ========================================================
 * CHIIKAWA 20/10 INTERACTIVE GREETING WEB APPLICATION
 * Pure Vanilla JavaScript — GitHub Pages Ready
 * Featuring Real Animated Chiikawa GIFs & Japanese Aesthetic
 * ========================================================
 */

// Chờ DOM sẵn sàng trước khi thực thi
document.addEventListener('DOMContentLoaded', () => {

  // ========================================================
  // 1. CẤU HÌNH LỜI CHÚC TÙY CHỈNH (CUSTOM WISHES SYSTEM)
  // ========================================================
  /*
    HƯỚNG DẪN THAY ĐỔI / THÊM LỜI CHÚC RIÊNG:
    Bạn có thể thêm tên người nhận vào danh sách dưới đây để khi người đó nhập đúng tên,
    hệ thống sẽ hiển thị lời chúc độc quyền dành riêng cho họ!
  */
  const customWishes = {
    // Lời chúc riêng cho "Mẹ"
    "mẹ": `Kính chúc Mẹ yêu một ngày 20/10 thật nhiều niềm vui, sức khỏe dồi dào và luôn an yên bên gia đình! 🌸\n\nCảm ơn Mẹ vì tất cả sự hy sinh và tình yêu thương vô bờ bến. Mong Mẹ mỗi ngày đều nở nụ cười thật tươi, bớt âu lo và luôn sống vui khỏe mỗi ngày. Chúng con yêu Mẹ rất nhiều! 💖`,

    // Lời chúc riêng cho "Chị" / "Chị Gái"
    "chị": `Chúc chị gái của em 20/10 ngày càng xinh đẹp rạng ngời, công việc thăng tiến vèo vèo và sớm tìm được hoàng tử nhé! ✨\n\nCảm ơn chị đã luôn đồng hành, yêu thương và nhường nhịn em. Hôm nay nhớ đi chơi thật vui và nhận thật nhiều quà nha! 🎁`,
    "chị gái": `Chúc chị gái thân yêu ngày 20/10 ngập tràn hoa, quà và hạnh phúc! Luôn tự tin, rực rỡ và thành công trên con đường mình chọn nha chị ơi! 🌸💕`,

    // Lời chúc riêng cho "Em Gái" / "Bé"
    "em": `Chúc bé yêu một ngày 20/10 ngập tràn niềm vui, học tập/làm việc suôn sẻ và luôn đáng yêu như em bé Chiikawa vậy nhé! 🎀\n\nMong em luôn được che chở, yêu thương và mỉm cười rạng rỡ mỗi ngày! ✨`,
    "em gái": `Chúc em gái cưng ngày 20/10 xinh đẹp gấp bội, thi cử đạt điểm cao và luôn vui tươi hồn nhiên nha! 💕`,

    // Lời chúc riêng cho "Người Yêu" / "Vợ" / "Crush"
    "người yêu": `Chúc em yêu của anh một ngày 20/10 thật ngọt ngào và hạnh phúc! 💖\n\nCảm ơn em đã đến bên anh, mang theo biết bao dịu dàng và ấm áp. Mong em luôn mỉm cười rạng rỡ, vì nụ cười của em là điều đẹp nhất trần đời. Yêu em rất nhiều! 🌸✨`,
    "vợ": `Chúc bà xã yêu quý ngày 20/10 ngập tràn hạnh phúc và tiếng cười! Cảm ơn em vì đã luôn chăm sóc và vun vén cho tổ ấm nhỏ của chúng ta. Anh yêu em mãi mãi! 💖💍`,
    "crush": `Chúc cậu một ngày 20/10 thật ngọt ngào, nhận được thật nhiều hoa và lời chúc tốt đẹp nhất nhé! ✨\n\nTrong mắt tớ, nụ cười của cậu lúc nào cũng tỏa sáng và đáng yêu nhất. Mong cậu luôn hạnh phúc và mỉm cười mỗi ngày! 🌸💌`
  };

  // Lời chúc chung tinh tế & ngọt ngào cho tất cả các tên khác
  const getDefaultWish = (name) => {
    return `Nhân ngày Phụ nữ Việt Nam 20/10, tớ xin gửi tới ${name} những lời chúc ngọt ngào và ấm áp nhất! 🌸✨\n\nChúc ${name} mỗi ngày thức dậy đều ngập tràn niềm vui, nụ cười luôn rạng rỡ trên môi như ánh ban mai. Chúc cho công việc của bạn luôn hanh thông, cuộc sống luôn êm đềm, luôn được yêu thương, trân trọng và sớm biến mọi ước mơ thành hiện thực nhé!\n\nDù ngoài kia có bao nhiêu bão giông hay áp lực, hãy luôn nhớ rằng bạn là một đóa hoa vô cùng đặc biệt, mạnh mẽ và quý giá trên thế giới này. Yaha~ Chúc cậu 20/10 thật hạnh phúc! 💕🎁`;
  };

  // Danh sách câu thoại cute kèm GIF nhân vật khi bấm nút "Nhận thêm yêu thương 💖"
  const chiikawaQuotes = [
    { text: "Chiikawa: Yaha! Chúc cậu 20/10 siêu siêu hạnh phúc nha!", gif: "./images/chiikawa-jump.gif" },
    { text: "Hachiware: Nụ cười của cậu tỏa sáng như ngàn vì sao vậy đó!", gif: "./images/hachiware-jump.gif" },
    { text: "Usagi: Ura~ Luôn xinh đẹp rạng rỡ gấp mười lần nha! Yaha!", gif: "./images/usagi-jump.gif" },
    { text: "Momonga: Hứ, hôm nay cho phép cậu được khen là xinh nhất trần đời!", gif: "./images/momonga-jump.gif" },
    { text: "Kurimanju: Uống một ly trà sữa ngọt ngào mừng 20/10 nào!", gif: "./images/kurimanju-jump.gif" },
    { text: "Chiikawa: Cậu xứng đáng nhận được tất cả những điều ngọt ngào nhất!", gif: "./images/chiikawa-dance.gif" },
    { text: "Hachiware: Hôm nay phải được cưng chiều thật nhiều đó nha!", gif: "./images/walktogether.gif" },
    { text: "Usagi: Puru puru~ Mọi muộn phiền hãy tan biến hết đi nào!", gif: "./images/usagi-jump.gif" },
    { text: "Chiikawa: Cảm ơn vì cậu đã luôn dịu dàng và tuyệt vời như thế!", gif: "./images/chiikawa-welcome.gif" }
  ];

  // ========================================================
  // 2. DOM ELEMENTS SELECTORS
  // ========================================================
  const welcomeView = document.getElementById('welcome-view');
  const greetingView = document.getElementById('greeting-view');

  const nameInput = document.getElementById('name-input');
  const inputWrapper = document.getElementById('input-wrapper');
  const errorMsg = document.getElementById('error-msg');
  const btnOpenGift = document.getElementById('btn-open-gift');
  const chiikawaAvatar = document.getElementById('chiikawa-avatar');

  const envelopeOverlay = document.getElementById('envelope-overlay');
  const envelopeBox = document.getElementById('envelope-box');
  const recipientNames = document.querySelectorAll('.recipient-name');

  const typewriterText = document.getElementById('typewriter-text');
  const typewriterCursor = document.getElementById('typewriter-cursor');

  const audioBtn = document.getElementById('audio-btn');
  const audioBtnText = document.getElementById('audio-btn-text');
  const vinylDisc = document.getElementById('vinyl-disc');
  const soundWave = document.getElementById('sound-wave');
  const bgm = document.getElementById('bgm');
  const soundTipPill = document.getElementById('sound-tip-pill');

  const btnMoreLove = document.getElementById('btn-more-love');
  const btnReplay = document.getElementById('btn-replay');
  const floatingQuotesContainer = document.getElementById('floating-quotes-container');

  // Fallback ảnh thông minh: Nếu file .gif chưa có thì chuyển sang .svg đã vẽ sẵn
  chiikawaAvatar.addEventListener('error', function () {
    if (this.src.includes('cry')) {
      this.src = './images/chiikawa-cry.svg';
    } else {
      this.src = './images/chiikawa-welcome.svg';
    }
  });

  let currentRecipientName = "Bạn Xinh Đẹp";
  let isAudioPlaying = false;
  let typingTimer = null;
  let webAudioCtx = null;
  let webAudioInterval = null;

  // ========================================================
  // 3. CANVAS NỀN: HOA ANH ĐÀO PASTEL & ÁNH SAO LẤP LÁNH
  // ========================================================
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 38; // Số lượng cánh hoa & ánh sao rơi nhẹ nhàng, thoáng đãng

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : -20;
      this.size = Math.random() * 10 + 6;
      this.speedY = Math.random() * 0.9 + 0.6;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.6;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 1.8;
      this.type = Math.random() > 0.5 ? 'petal' : (Math.random() > 0.4 ? 'sparkle' : 'star');
      this.opacity = Math.random() * 0.45 + 0.35;

      // Màu pastel trang nhã (không sến, tông kem/đào/nắng dịu)
      const colors = ['#F7D1BA', '#FAD4C0', '#FCEADE', '#CBE3D5', '#DCEAF7', '#FFF3B0'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += Math.sin(this.y * 0.012) + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > canvas.height + 25 || this.x < -30 || this.x > canvas.width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.opacity;

      if (this.type === 'petal') {
        // Cánh hoa mềm mại
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(this.size * 0.7, -this.size * 0.3, this.size, 0);
        ctx.quadraticCurveTo(this.size * 0.7, this.size * 0.4, 0, this.size);
        ctx.quadraticCurveTo(-this.size * 0.2, this.size * 0.4, 0, 0);
        ctx.fill();
      } else if (this.type === 'sparkle') {
        // Ánh sao 4 cánh lấp lánh
        ctx.fillStyle = this.color;
        const r = this.size * 0.5;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * 90 * Math.PI) / 180) * r, Math.sin((i * 90 * Math.PI) / 180) * r);
          ctx.lineTo(Math.cos(((i * 90 + 45) * Math.PI) / 180) * (r * 0.35), Math.sin(((i * 90 + 45) * Math.PI) / 180) * (r * 0.35));
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Hạt tròn lấp lánh nhỏ
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // Khởi tạo hạt rơi
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // ========================================================
  // 4. HỆ THỐNG ÂM THANH (BGM & FALLBACK MUSIC BOX SYNTH)
  // ========================================================
  function startMusicBoxSynthesizer() {
    try {
      if (!webAudioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          webAudioCtx = new AudioContext();
        }
      }
      if (webAudioCtx && webAudioCtx.state === 'suspended') {
        webAudioCtx.resume().catch(() => {});
      }

      // Giai điệu hộp âm nhạc (Music Box) êm dịu phong cách Chiikawa
      const melodyNotes = [
        523.25, 587.33, 659.25, 783.99, 880.00, 783.99, 659.25, 587.33,
        523.25, 659.25, 783.99, 880.00, 1046.50, 880.00, 783.99, 659.25
      ];
      let noteIdx = 0;

      if (!webAudioInterval && webAudioCtx) {
        webAudioInterval = setInterval(() => {
          if (!isAudioPlaying || !webAudioCtx) return;
          try {
            const osc = webAudioCtx.createOscillator();
            const gain = webAudioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(melodyNotes[noteIdx], webAudioCtx.currentTime);

            gain.gain.setValueAtTime(0.08, webAudioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + 1.2);

            osc.connect(gain);
            gain.connect(webAudioCtx.destination);

            osc.start();
            osc.stop(webAudioCtx.currentTime + 1.2);

            noteIdx = (noteIdx + 1) % melodyNotes.length;
          } catch (err) {
            console.warn("Lỗi nốt synthesizer:", err);
          }
        }, 420);
      }
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
  }

  function stopMusicBoxSynthesizer() {
    if (webAudioInterval) {
      clearInterval(webAudioInterval);
      webAudioInterval = null;
    }
  }

  function setAudioVisualState(playing) {
    isAudioPlaying = playing;
    if (playing) {
      vinylDisc.classList.add('spinning');
      soundWave.classList.add('playing');
      if (audioBtnText) audioBtnText.textContent = 'Tắt nhạc';
      if (soundTipPill) {
        soundTipPill.classList.add('playing');
        soundTipPill.innerHTML = '<span class="sound-tip-icon">🎶</span><span class="sound-tip-msg">Đang phát nhạc nền • Chạm để tắt nếu muốn</span>';
      }
    } else {
      vinylDisc.classList.remove('spinning');
      soundWave.classList.remove('playing');
      if (audioBtnText) audioBtnText.textContent = 'Bật nhạc';
      if (soundTipPill) {
        soundTipPill.classList.remove('playing');
        soundTipPill.innerHTML = '<span class="sound-tip-icon">🎵</span><span class="sound-tip-msg">Không nghe thấy nhạc? <b>Chạm vào đây</b> hoặc kiểm tra nút gạt im lặng trên iPhone nha!</span>';
      }
    }
  }

  function playBGM() {
    if (!bgm) return;

    // Đánh thức Web Audio Context nếu đang ở trạng thái suspended (đặc biệt trên iOS Safari)
    if (webAudioCtx && webAudioCtx.state === 'suspended') {
      webAudioCtx.resume().catch(() => {});
    }

    // Đảm bảo không bị mute
    bgm.muted = false;

    const playPromise = bgm.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setAudioVisualState(true);
        })
        .catch((err) => {
          console.warn("Chính sách Autoplay của điện thoại yêu cầu cử chỉ chạm để kích hoạt:", err);
          setAudioVisualState(false);

          // Tạo listener một lần trên window: Ngay khi người dùng chạm vào màn hình sẽ lập tức mở khóa âm thanh
          const resumeOnTouch = () => {
            bgm.play()
              .then(() => {
                setAudioVisualState(true);
              })
              .catch(() => {
                // Nếu file media vẫn bị chặn hoặc lỗi định dạng, chuyển sang Web Audio Synthesizer
                startMusicBoxSynthesizer();
                setAudioVisualState(true);
              });
            window.removeEventListener('touchstart', resumeOnTouch);
            window.removeEventListener('touchend', resumeOnTouch);
            window.removeEventListener('click', resumeOnTouch);
          };

          window.addEventListener('touchstart', resumeOnTouch, { once: true, passive: true });
          window.addEventListener('touchend', resumeOnTouch, { once: true });
          window.addEventListener('click', resumeOnTouch, { once: true });
        });
    }
  }

  function pauseBGM() {
    if (bgm) bgm.pause();
    stopMusicBoxSynthesizer();
    setAudioVisualState(false);
  }

  function toggleAudio() {
    if (isAudioPlaying) {
      pauseBGM();
    } else {
      playBGM();
    }
  }

  // Lắng nghe sự kiện audio kết thúc hoặc tạm dừng
  if (bgm) {
    bgm.addEventListener('play', () => setAudioVisualState(true));
    bgm.addEventListener('pause', () => setAudioVisualState(false));

    // Dự phòng khi tệp âm thanh gặp sự cố tải
    bgm.addEventListener('error', (e) => {
      console.warn("Lỗi tải tệp âm thanh HTML5, chuyển đổi dự phòng:", e);
      if (!bgm.src.endsWith('rio.mp3')) {
        bgm.src = './music/rio.mp3';
        bgm.load();
        if (isAudioPlaying) {
          bgm.play().catch(() => startMusicBoxSynthesizer());
        }
      } else {
        startMusicBoxSynthesizer();
      }
    });
  }

  // Gắn sự kiện cho nút đĩa than góc phải
  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleAudio();
  });

  // Gắn sự kiện cho thanh gợi ý âm thanh trên thiệp chúc
  if (soundTipPill) {
    soundTipPill.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleAudio();
    });
  }

  // ========================================================
  // 5. URL PARAMETERS (HỖ TRỢ ?name=...)
  // ========================================================
  const urlParams = new URLSearchParams(window.location.search);
  const nameParam = urlParams.get('name');
  if (nameParam && nameParam.trim() !== '') {
    nameInput.value = nameParam.trim();
  }

  // Preload âm thanh sớm khi người dùng chạm hoặc tương tác vào ô nhập tên
  const preloadAudioEarly = () => {
    if (bgm && bgm.readyState === 0) {
      bgm.load();
    }
  };
  nameInput.addEventListener('focus', preloadAudioEarly, { once: true });
  nameInput.addEventListener('touchstart', preloadAudioEarly, { once: true, passive: true });

  nameInput.addEventListener('input', () => {
    errorMsg.classList.add('hidden');
    chiikawaAvatar.src = './images/chiikawa-welcome.gif';
  });

  nameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      btnOpenGift.click();
    }
  });

  // Logic khi bấm "Mở quà 20/10 ngay 🎁"
  btnOpenGift.addEventListener('click', () => {
    const enteredName = nameInput.value.trim();

    // TRƯỜNG HỢP 1: CHƯA NHẬP TÊN
    if (!enteredName) {
      // 1. Rung lắc ô input
      inputWrapper.classList.remove('shake-anim');
      void inputWrapper.offsetWidth; // Trigger reflow
      inputWrapper.classList.add('shake-anim');

      // 2. Chuyển sang GIF Chiikawa khóc nhè anime chân thực
      chiikawaAvatar.src = './images/chiikawa-cry.gif';

      // 3. Hiện thông báo lỗi ngộ nghĩnh
      errorMsg.classList.remove('hidden');

      nameInput.focus();
      return;
    }

    // TRƯỜNG HỢP 2: ĐÃ NHẬP TÊN HỢP LỆ
    currentRecipientName = enteredName;

    recipientNames.forEach(el => {
      el.textContent = currentRecipientName;
    });

    // 1. Phát nhạc NGAY LẬP TỨC trong user gesture (đảm bảo iOS Safari / Chrome mobile cho phép phát)
    playBGM();

    // 2. Bắn pháo hoa giấy & ánh sao chào mừng
    fireBigConfetti();

    // 3. Chuyển cảnh SPA mượt mà từ Trang 1 sang Trang 2
    welcomeView.classList.remove('active');
    welcomeView.classList.add('hidden');

    greetingView.classList.remove('hidden');
    greetingView.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ========================================================
  // 7. BƯỚC ĐỆM: MỞ PHONG BÌ THƯ BÍ MẬT (ENVELOPE MODAL)
  // ========================================================
  envelopeOverlay.addEventListener('click', () => {
    // Nếu nhạc chưa phát (do hạn chế autoplay ở bước trước), kích hoạt ngay bằng cử chỉ chạm mở phong bì
    if (!isAudioPlaying) {
      playBGM();
    }

    envelopeBox.classList.add('open');

    setTimeout(() => {
      fireMiniConfetti();
      envelopeOverlay.classList.add('opened');
      startTypewriterEffect();
    }, 600);
  });

  // ========================================================
  // 8. HIỆU ỨNG GÕ CHỮ (TYPEWRITER EFFECT)
  // ========================================================
  function startTypewriterEffect() {
    if (typingTimer) clearTimeout(typingTimer);
    typewriterText.textContent = "";
    typewriterCursor.style.display = "inline-block";

    const lowerName = currentRecipientName.toLowerCase();
    const wishMessage = customWishes[lowerName] || getDefaultWish(currentRecipientName);

    let charIndex = 0;
    const typingSpeed = 38;

    function typeChar() {
      if (charIndex < wishMessage.length) {
        typewriterText.textContent += wishMessage.charAt(charIndex);
        charIndex++;
        const char = wishMessage.charAt(charIndex - 1);
        const delay = (char === '\n' || char === '.' || char === '!') ? 280 : typingSpeed;
        typingTimer = setTimeout(typeChar, delay);
      } else {
        setTimeout(() => {
          typewriterCursor.style.opacity = '0.3';
        }, 3000);
      }
    }

    typeChar();
  }

  // ========================================================
  // 9. HIỆU ỨNG PHÁO HOA GIẤY (CANVAS-CONFETTI)
  // ========================================================
  function fireBigConfetti() {
    if (typeof confetti !== 'function') return;

    const count = 180;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF8F74', '#96D5F2', '#FFE89E', '#F7D0BA', '#BCE3D2', '#FFFFFF'],
      shapes: ['circle', 'square']
    };

    function fire(particleRatio, opts) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }

  function fireMiniConfetti() {
    if (typeof confetti !== 'function') return;
    confetti({
      particleCount: 45,
      angle: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF8F74', '#FFE89E', '#96D5F2']
    });
  }

  // ========================================================
  // 10. NÚT "NHẬN THÊM YÊU THƯƠNG 💖" (FLOATING QUOTES & GIFS)
  // ========================================================
  btnMoreLove.addEventListener('click', (e) => {
    // 1. Lấy ngẫu nhiên câu thoại kèm GIF nhân vật
    const randomItem = chiikawaQuotes[Math.floor(Math.random() * chiikawaQuotes.length)];

    // 2. Tạo phần tử bong bóng bay lên có avatar GIF hoạt hình
    const bubble = document.createElement('div');
    bubble.className = 'floating-quote-bubble';
    bubble.innerHTML = `
      <img src="${randomItem.gif}" class="quote-gif-avatar" alt="Character">
      <span>${randomItem.text}</span>
    `;

    // Vị trí xuất hiện ngẫu nhiên theo chiều ngang
    const randomLeft = Math.max(16, Math.min(window.innerWidth - 360, Math.random() * (window.innerWidth - 340)));
    bubble.style.left = `${randomLeft}px`;
    floatingQuotesContainer.appendChild(bubble);

    // 3. Tạo kèm 2 trái tim / ánh sao bay
    for (let i = 0; i < 2; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.textContent = ['💖', '✨', '🌸', '💫', '🎉'][Math.floor(Math.random() * 5)];
      heart.style.left = `${randomLeft + Math.random() * 220}px`;
      floatingQuotesContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 2800);
    }

    // Tự động dọn dẹp DOM
    setTimeout(() => {
      bubble.remove();
    }, 3400);

    // Bắn thêm chùm confetti nhỏ
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 22,
        spread: 50,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        },
        colors: ['#FF8F74', '#FFE89E', '#96D5F2']
      });
    }
  });

  // ========================================================
  // 11. NÚT "XEM LẠI TỪ ĐẦU 🔄"
  // ========================================================
  btnReplay.addEventListener('click', () => {
    envelopeBox.classList.remove('open');
    envelopeOverlay.classList.remove('opened');

    greetingView.classList.remove('active');
    greetingView.classList.add('hidden');

    welcomeView.classList.remove('hidden');
    welcomeView.classList.add('active');

    chiikawaAvatar.src = './images/chiikawa-welcome.gif';
    errorMsg.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
