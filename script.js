const allWords = [
   "cười","sách","mưa","ghế","gương","khóc","tuyết","tẩy","thước","núi","biển","kéo","rồng","chuột",
   "mèo","chó",
    // Thêm các từ từ thư mục images/tu
    "ban công", "đồ chơi", "đàn ngan", "tờ báo", "tắc kè", "tôm hùm", "thợ gốm", "thầy giáo",
    "than đá", "số chín", "quả lựu", "quả dâu", "nấm rơm", "mũ len", "máy bay", "lọ mực",
    "kéo co", "khăn đỏ", "dế mèn", "cắm trại", "cầu tre", "cơn lốc", "bạn thân", "bơm xe",
    "bơi lội", "bó củi", "bãi cỏ", "bàn ghế"
];

const allSentences = [
    "ông cho đàn gà ăn thóc",
    "sen nở trong hồ",
    "nhà bà có khóm tre to",
    "mẹ ru bé ngủ trưa",
    "mẹ khen bé sạch sẽ",
    "mẹ cho bé đi khám ở trạm y tế",
    "bố em là bộ đội",
    "bé vừa ngủ dậy",
    "bé nặn con ngựa",
    "bé ngồi thổi sáo",
    "bé gửi thư cho chú bộ đội",
    "bé giữ vở cẩn thận",
    "cái cò đi đón cơn mưa"
];

// Mapping từ và câu với ảnh tương ứng
const wordImageMapping = {
    "cười": "images/tu/cười.jpg",
    "sách": "images/tu/sách.jpg",
    "mưa": "images/tu/mưa.webp",
    "ghế": "images/tu/ghế.jpg",
    "gương": "images/tu/gương.png",
    "khóc": "images/tu/khóc.webp",
    "tuyết": "images/tu/tuyết.webp",
    "tẩy": "images/tu/tẩy.webp",
    "thước": "images/tu/thước.webp",
    "núi": "images/tu/núi.jpeg",
    "biển": "images/tu/biển.webp",
    "kéo": "images/tu/kéo.webp",
    "rồng": "images/tu/rồng.webp",
    "chuột": "images/tu/chuột.webp",
    "mèo": "images/tu/mèo.jpeg",
    "chó": "images/tu/chó.jpeg",
    "ban công": "images/tu/ban công.jpg",
    "đồ chơi": "images/tu/đồ chơi.jpg",
    "đàn ngan": "images/tu/đàn ngan.jpg",
    "tờ báo": "images/tu/tờ báo.jpg",
    "tắc kè": "images/tu/tắc kè.jpg",
    "tôm hùm": "images/tu/tôm hùm.jpg",
    "thợ gốm": "images/tu/thợ gốm.jpg",
    "thầy giáo": "images/tu/thầy giáo.png",
    "than đá": "images/tu/than đá.jpg",
    "số chín": "images/tu/số chín.png",
    "quả lựu": "images/tu/quả lựu.jpg",
    "quả dâu": "images/tu/quả dâu.jpg",
    "nấm rơm": "images/tu/nấm rơm.webp",
    "mũ len": "images/tu/mũ len.jpg",
    "máy bay": "images/tu/máy bay.jpg",
    "lọ mực": "images/tu/lọ mực.jpg",
    "kéo co": "images/tu/kéo co.jpg",
    "khăn đỏ": "images/tu/khăn đỏ.jpg",
    "dế mèn": "images/tu/dế mèn.jpg",
    "cắm trại": "images/tu/cắm trại.png",
    "cầu tre": "images/tu/cầu tre.jpg",
    "cơn lốc": "images/tu/cơn lốc.webp",
    "bạn thân": "images/tu/bạn thân.jpg",
    "bơm xe": "images/tu/bơm xe.webp",
    "bơi lội": "images/tu/bơi lội.jpg",
    "bó củi": "images/tu/bó củi.jpg",
    "bãi cỏ": "images/tu/bãi cỏ.jpg",
    "bàn ghế": "images/tu/bàn ghế.png"
};

const sentenceImageMapping = {
    "ông cho đàn gà ăn thóc": "images/cau/ông cho đàn gà ăn thóc.gif",
    "sen nở trong hồ": "images/cau/sen nở trong hồ.jpg",
    "nhà bà có khóm tre to": "images/cau/nhà bà có khóm tre to.jpg",
    "mẹ ru bé ngủ trưa": "images/cau/mẹ ru bé ngủ trưa.jpg",
    "mẹ khen bé sạch sẽ": "images/cau/mẹ khen bé sạch sẽ.jpg",
    "mẹ cho bé đi khám ở trạm y tế": "images/cau/mẹ cho bé đi khám ở trạm y tế.jpg",
    "bố em là bộ đội": "images/cau/bố em là bộ đội.jpg",
    "bé vừa ngủ dậy": "images/cau/bé vừa ngủ dậy.jpg",
    "bé nặn con ngựa": "images/cau/bé nặn con ngựa.jpg",
    "bé ngồi thổi sáo": "images/cau/bé ngồi thổi sáo.png",
    "bé gửi thư cho chú bộ đội": "images/cau/bé gửi thư cho chú bộ đội.jpg",
    "bé giữ vở cẩn thận": "images/cau/bé giữ vở cẩn thận.png",
    "cái cò đi đón cơn mưa": "images/cau/cái cò đi đón cơn mưa.jpg"
};

let currentPhase = 1; // 1 for words, 2 for sentences
let currentWordSet = [];
let currentSentenceSet = [];
let selectedWord = "";
let selectedSentence = "";
let shuffledLetters = [];
let selectedLetters = [];
let score = 0;
let gameStarted = false;
let currentLetterIndex = 0;
let wordsPlayed = [];
let sentencesPlayed = [];
let timeLeft = 0;
let timerId;
let currentWordIndex = 0;
let currentSentenceIndex = 0;

// DOM Elements
const gameContainer = document.getElementById("game-container");
const wordDisplay = document.getElementById("word-display");
const wordImageContainer = document.getElementById("word-image-container");
const wordBlanks = document.getElementById("word-blanks");
const lettersContainer = document.getElementById("letters-container");
const messageElement = document.getElementById("message");
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score-display");
const gamePhaseDisplay = document.getElementById("game-phase");
const body = document.body;
const gameOverOverlay = document.querySelector(".game-over-overlay");
const finalScoreDisplay = document.getElementById("final-score");
const playAgainButton = document.querySelector(".play-again-button");
const timerDisplayElement = document.getElementById("timer-display");

// Tách danh sách từ thành từ đơn và từ ghép
const simpleWords = allWords.filter(word => !word.includes(' '));
const compoundWords = allWords.filter(word => word.includes(' '));

// Hàm trộn chữ cái và thêm chữ cái giả
function shuffleLetters(text) {
    // Tách text thành mảng chữ cái, bỏ qua dấu cách
    const letters = text.split('').filter(letter => letter !== ' ');
    const numFakeLetters = Math.min(3, Math.floor(letters.length / 2));
    const fakeLetters = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    // Thêm chữ cái giả
    for (let i = 0; i < numFakeLetters; i++) {
        let randomLetter;
        do {
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        } while (letters.includes(randomLetter) || fakeLetters.includes(randomLetter));
        fakeLetters.push(randomLetter);
    }
    
    // Kết hợp chữ cái thật và giả
    const combinedLetters = [...letters, ...fakeLetters];
    
    // Trộn ngẫu nhiên
    for (let i = combinedLetters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combinedLetters[i], combinedLetters[j]] = [combinedLetters[j], combinedLetters[i]];
    }
    
    return combinedLetters;
}

// Chọn ngẫu nhiên từ một mảng
function getRandomItems(array, count) {
    const availableItems = array.filter(item => !wordsPlayed.includes(item));
    const shuffled = [...availableItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Tạo danh sách từ cho phần 1
function createWordSet() {
    const simpleWordSet = getRandomItems(simpleWords, 3);
    const compoundWordSet = getRandomItems(compoundWords, 7);
    return [...simpleWordSet, ...compoundWordSet];
}

// Tạo danh sách câu cho phần 2
function createSentenceSet() {
    return getRandomItems(allSentences, 5);
}

function selectWordSet() {
    if (currentPhase === 1) {
        if (wordsPlayed.length >= 10) {
            currentPhase = 2;
            gamePhaseDisplay.textContent = "Phần 2: Câu";
            return null;
        }
        
        if (wordsPlayed.length === 0 || currentWordIndex >= currentWordSet.length) {
            currentWordSet = createWordSet();
            currentWordIndex = 0;
        }
        
        return currentWordSet;
    }
    return null;
}

function selectSentenceSet() {
    if (currentPhase === 2) {
        if (sentencesPlayed.length >= 5) {
            gameOver(true);
            return null;
        }
        
        if (sentencesPlayed.length === 0 || currentSentenceIndex >= currentSentenceSet.length) {
            currentSentenceSet = createSentenceSet();
            currentSentenceIndex = 0;
        }
        
        return currentSentenceSet;
    }
    return null;
}

function selectWord() {
    if (currentPhase === 1) {
        if (!currentWordSet || currentWordIndex >= currentWordSet.length) {
            return "";
        }
        selectedWord = currentWordSet[currentWordIndex];
        return selectedWord;
    }
    return "";
}

function selectSentence() {
    if (currentPhase === 2) {
        if (!currentSentenceSet || currentSentenceIndex >= currentSentenceSet.length) {
            return "";
        }
        selectedSentence = currentSentenceSet[currentSentenceIndex];
        return selectedSentence;
    }
    return "";
}

// Thêm hàm tính toán thời gian hiển thị
function calculateDisplayTime(text) {
    // Tính số từ trong text
    const wordCount = text.split(' ').length;
    // Tính số ký tự (không tính dấu cách)
    const charCount = text.replace(/\s/g, '').length;
    
    // Thời gian cơ bản cho mỗi từ
    const baseTimePerWord = 1800; // 1.8 giây cho mỗi từ
    
    // Thời gian cơ bản cho mỗi ký tự
    const baseTimePerChar = 300; // 0.3 giây cho mỗi ký tự
    
    // Tính thời gian dựa trên số từ và số ký tự
    const timeByWord = wordCount * baseTimePerWord;
    const timeByChar = charCount * baseTimePerChar;
    
    // Lấy thời gian lớn hơn giữa hai cách tính
    const displayTime = Math.max(timeByWord, timeByChar);
    
    // Giới hạn thời gian tối thiểu và tối đa
    return Math.min(Math.max(displayTime, 2000), 8000);
}

function displayWord() {
    wordBlanks.innerHTML = "";
    wordImageContainer.innerHTML = "";
    lettersContainer.innerHTML = ""; // Xóa các chữ cái cũ
    
    // Ẩn hiển thị phần game
    gamePhaseDisplay.classList.add('hidden');
    
    if (currentPhase === 1) {
        const word = selectWord();
        if (!word) return;
        
        // Ẩn container ảnh mặc định
        wordImageContainer.style.display = "none";
        
        // Hiển thị ảnh nếu là từ ghép
        if (wordImageMapping[word]) {
            wordImageContainer.style.display = "flex";
            const img = document.createElement('img');
            img.src = wordImageMapping[word];
            img.alt = word;
            wordImageContainer.appendChild(img);
        }
        
        // Hiển thị từ ban đầu
        const initialWordDisplay = document.createElement('div');
        initialWordDisplay.style.fontSize = '32px';
        initialWordDisplay.style.fontWeight = 'bold';
        initialWordDisplay.style.color = '#2196f3';
        initialWordDisplay.textContent = word;
        wordBlanks.appendChild(initialWordDisplay);
        
        // Tính toán thời gian hiển thị dựa trên độ dài và độ phức tạp của từ
        const displayTime = calculateDisplayTime(word);
        
        // Sau thời gian hiển thị, chuyển sang màn hình ghép chữ
        setTimeout(() => {
            wordBlanks.innerHTML = "";
            // Tạo ô trống cho từng chữ cái và thêm khoảng trắng
            const words = word.split(' ');
            let totalIndex = 0;
            words.forEach((wordPart, wordIndex) => {
                // Tạo ô trống cho từng chữ cái trong từ
                wordPart.split('').forEach((letter, letterIndex) => {
                    const blank = document.createElement('div');
                    blank.classList.add('letter-blank');
                    blank.dataset.index = totalIndex;
                    wordBlanks.appendChild(blank);
                    totalIndex++;
                });
                
                // Thêm khoảng trắng sau mỗi từ (trừ từ cuối cùng) chỉ để hiển thị
                if (wordIndex < words.length - 1) {
                    const space = document.createElement('div');
                    space.style.width = '20px';
                    space.style.display = 'inline-block';
                    wordBlanks.appendChild(space);
                }
            });
            displayShuffledLetters();
        }, displayTime);
        
    } else {
        const sentence = selectSentence();
        if (!sentence) return;
        
        // Hiển thị container ảnh và ảnh câu
        wordImageContainer.style.display = "flex";
        if (sentenceImageMapping[sentence]) {
            const img = document.createElement('img');
            img.src = sentenceImageMapping[sentence];
            img.alt = sentence;
            wordImageContainer.appendChild(img);
        }
        
        // Hiển thị câu ban đầu
        const initialSentenceDisplay = document.createElement('div');
        initialSentenceDisplay.style.fontSize = '24px';
        initialSentenceDisplay.style.fontWeight = 'bold';
        initialSentenceDisplay.style.color = '#2196f3';
        initialSentenceDisplay.textContent = sentence;
        wordBlanks.appendChild(initialSentenceDisplay);
        
        // Tính toán thời gian hiển thị dựa trên độ dài và độ phức tạp của câu
        const displayTime = calculateDisplayTime(sentence);
        
        // Sau thời gian hiển thị, chuyển sang màn hình ghép từ
        setTimeout(() => {
            wordBlanks.innerHTML = "";
            // Tạo ô trống cho từng từ trong câu
            const words = sentence.split(' ');
            words.forEach((word, index) => {
                const blank = document.createElement('div');
                blank.classList.add('word-blank');
                blank.dataset.index = index;
                blank.dataset.word = word;
                wordBlanks.appendChild(blank);
                
                // Thêm khoảng trắng sau mỗi từ (trừ từ cuối cùng)
                if (index < words.length - 1) {
                    const space = document.createElement('div');
                    space.style.width = '20px';
                    space.style.display = 'inline-block';
                    wordBlanks.appendChild(space);
                }
            });
            displayShuffledWords();
        }, displayTime);
    }
    
    wordDisplay.style.display = "flex";
}

function displayShuffledLetters() {
    lettersContainer.innerHTML = "";
    const currentText = currentPhase === 1 ? selectedWord : selectedSentence;
    shuffledLetters = shuffleLetters(currentText);
    shuffledLetters.forEach(letter => {
        const letterElement = document.createElement("div");
        letterElement.classList.add("letter");
        letterElement.textContent = letter;
        letterElement.addEventListener("click", () => handleLetterClick(letterElement));
        lettersContainer.appendChild(letterElement);
    });
    currentLetterIndex = 0;
    selectedLetters = [];
    if (timerId) {
        clearInterval(timerId);
    }
    timeLeft = currentText.length * 3;
    timerDisplayElement.textContent = `Thời gian: ${timeLeft}`;
    timerDisplayElement.style.display = "flex";
    startTimer();
}

function handleLetterClick(clickedLetterElement) {
    if (!gameStarted) return;
    const clickedLetter = clickedLetterElement.textContent;
    const currentText = currentPhase === 1 ? selectedWord : selectedSentence;
    
    // Lọc bỏ dấu cách khi kiểm tra
    const currentTextWithoutSpaces = currentText.replace(/\s/g, '');
    
    // Tính vị trí chữ cái cần ghép trong chuỗi không có dấu cách
    const expectedLetter = currentTextWithoutSpaces[selectedLetters.length];
    
    if (clickedLetter === expectedLetter) {
        // Tìm ô trống đích, bỏ qua các khoảng trắng hiển thị
        const blanks = document.querySelectorAll('.letter-blank');
        let targetBlank = blanks[selectedLetters.length];
        
        if (!targetBlank) return;
        
        const targetRect = targetBlank.getBoundingClientRect();
        const letterRect = clickedLetterElement.getBoundingClientRect();
        
        const tx = targetRect.left - letterRect.left;
        const ty = targetRect.top - letterRect.top;
        
        const flyingLetter = clickedLetterElement.cloneNode(true);
        flyingLetter.classList.add('flying');
        flyingLetter.style.setProperty('--tx', `${tx}px`);
        flyingLetter.style.setProperty('--ty', `${ty}px`);
        document.body.appendChild(flyingLetter);
        
        clickedLetterElement.style.opacity = '0';
        clickedLetterElement.style.pointerEvents = 'none';
        targetBlank.textContent = clickedLetter;
        targetBlank.classList.add('filled');
        
        setTimeout(() => {
            flyingLetter.remove();
        }, 500);
        
        selectedLetters.push(clickedLetter);
        currentLetterIndex++;
        
        // Kiểm tra kết quả không tính dấu cách
        const currentResult = selectedLetters.join('');
        
        if (currentResult === currentTextWithoutSpaces) {
            clearInterval(timerId);
            hideTimer();
            
            // Hiển thị thông báo thành công
            messageElement.textContent = "Giỏi lắm!";
            messageElement.style.display = "block";
            
            let wordScore = timeLeft * 100;
            score += wordScore;
            scoreDisplay.textContent = `Điểm: ${score}`;
            const audio = new Audio("cheer.mp3");
            audio.play();
            
            setTimeout(() => {
                messageElement.style.display = "none";
                if (currentPhase === 1) {
                    currentWordIndex++;
                    wordsPlayed.push(selectedWord);
                    
                    if (wordsPlayed.length >= 10) {
                        // Hiển thị thông báo chuyển phần
                        messageElement.textContent = "Chúc mừng! Bạn đã hoàn thành phần 1. Chuẩn bị cho phần 2...";
                        messageElement.style.display = "block";
                        
                        setTimeout(() => {
                            messageElement.style.display = "none";
                            currentPhase = 2;
                            gamePhaseDisplay.textContent = "Phần 2: Câu";
                            selectSentenceSet(); // Chọn câu đầu tiên cho phần 2
                            displayWord();
                        }, 2000);
                    } else {
                        selectWordSet();
                        displayWord();
                    }
                } else {
                    currentSentenceIndex++;
                    sentencesPlayed.push(selectedSentence);
                    
                    if (sentencesPlayed.length >= 5) {
                        gameOver(true);
                        return;
                    } else {
                        selectSentenceSet();
                        displayWord();
                    }
                }
            }, 1000);
        }
    } else {
        gameOver();
    }
}

// Thêm hàm mới để hiển thị các từ đã trộn cho phần câu
function displayShuffledWords() {
    lettersContainer.innerHTML = "";
    const currentSentence = selectedSentence;
    const words = currentSentence.split(' ');
    const shuffledWords = [...words].sort(() => 0.5 - Math.random());
    
    shuffledWords.forEach(word => {
        const wordElement = document.createElement("div");
        wordElement.classList.add("word");
        wordElement.textContent = word;
        wordElement.addEventListener("click", () => handleWordClick(wordElement));
        lettersContainer.appendChild(wordElement);
    });
    
    selectedLetters = [];
    if (timerId) {
        clearInterval(timerId);
    }
    timeLeft = words.length * 5; // Thời gian dài hơn cho phần câu
    timerDisplayElement.textContent = `Thời gian: ${timeLeft}`;
    timerDisplayElement.style.display = "flex";
    startTimer();
}

// Thêm hàm mới để xử lý click vào từ trong phần câu
function handleWordClick(clickedWordElement) {
    if (!gameStarted) return;
    const clickedWord = clickedWordElement.textContent;
    const currentSentence = selectedSentence;
    const words = currentSentence.split(' ');
    
    // Tìm ô trống tiếp theo
    const blanks = document.querySelectorAll('.word-blank');
    const nextBlank = Array.from(blanks).find(blank => !blank.textContent);
    
    if (!nextBlank) return;
    
    const expectedWord = nextBlank.dataset.word;
    
    if (clickedWord === expectedWord) {
        const targetRect = nextBlank.getBoundingClientRect();
        const wordRect = clickedWordElement.getBoundingClientRect();
        
        const tx = targetRect.left - wordRect.left;
        const ty = targetRect.top - wordRect.top;
        
        const flyingWord = clickedWordElement.cloneNode(true);
        flyingWord.classList.add('flying');
        flyingWord.style.setProperty('--tx', `${tx}px`);
        flyingWord.style.setProperty('--ty', `${ty}px`);
        document.body.appendChild(flyingWord);
        
        clickedWordElement.style.opacity = '0';
        clickedWordElement.style.pointerEvents = 'none';
        nextBlank.textContent = clickedWord;
        nextBlank.classList.add('filled');
        
        setTimeout(() => {
            flyingWord.remove();
        }, 500);
        
        selectedLetters.push(clickedWord);
        
        // Kiểm tra xem đã hoàn thành câu chưa
        const currentResult = selectedLetters.join(' ');
        if (currentResult === currentSentence) {
            clearInterval(timerId);
            hideTimer();
            
            let sentenceScore = timeLeft * 200; // Điểm cao hơn cho phần câu
            score += sentenceScore;
            scoreDisplay.textContent = `Điểm: ${score}`;
            const audio = new Audio("cheer.mp3");
            audio.play();
            
            setTimeout(() => {
                currentSentenceIndex++;
                sentencesPlayed.push(selectedSentence);
                
                if (sentencesPlayed.length >= 5) {
                    gameOver(true);
                    return;
                } else {
                    selectSentenceSet();
                }
                displayWord();
            }, 1000);
        }
    } else {
        gameOver();
    }
}

function startGame() {
    gameStarted = true;
    startButton.style.display = "none";
    gameContainer.classList.remove('start-screen');
    gameContainer.classList.add('playing-screen');
    body.classList.remove('start-screen');
    body.classList.add('playing-screen');
    
    // Reset tất cả các biến trạng thái game
    score = 0;
    wordsPlayed = [];
    sentencesPlayed = [];
    selectedLetters = [];
    currentLetterIndex = 0;
    currentPhase = 1; // Reset về phase 1
    currentWordIndex = 0;
    currentSentenceIndex = 0;
    
    // Reset các biến set và từ/câu đang chọn
    currentWordSet = null;
    currentSentenceSet = null;
    selectedWord = "";
    selectedSentence = "";
    
    // Reset các biến khác
    shuffledLetters = [];
    selectedLetters = [];
    
    // Reset và ẩn message element
    messageElement.textContent = "Giỏi lắm!";
    messageElement.style.display = "none";
    
    // Hiển thị phần game và đặt text
    gamePhaseDisplay.textContent = "Phần 1: Từ";
    gamePhaseDisplay.classList.remove('hidden');
    
    lettersContainer.innerHTML = "";
    
    // Đợi 1.2s để hiển thị phần game
    setTimeout(() => {
        selectWordSet();
        displayWord();
        scoreDisplay.textContent = `Điểm: ${score}`;
        hideTimer();
    }, 1200);
}

function gameOver(maxPoint = false) {
    gameStarted = false;
    clearInterval(timerId);
    hideTimer();
    
    const gameOverTitle = document.getElementById('game-over-title');
    
    if (maxPoint) {
        gameOverTitle.textContent = "Chúc mừng!";
        finalScoreDisplay.textContent = `Bạn đã hoàn thành xuất sắc trò chơi với ${score} điểm!`;
        gameOverOverlay.classList.add('win');
        document.querySelector('.game-over-content').classList.add('win');
    } else {
        gameOverTitle.textContent = "Game Over!";
        finalScoreDisplay.textContent = `Điểm của bạn: ${score}`;
    }
    
    gameOverOverlay.style.display = "flex";
    body.classList.remove('playing-screen');
    body.classList.add('game-over-screen');
    gameContainer.classList.remove('playing-screen');
    gameContainer.classList.add('game-over-screen');
}

function startTimer() {
    clearInterval(timerId);
    const currentText = currentPhase === 1 ? selectedWord : selectedSentence;
    // Điều chỉnh thời gian dựa vào độ khó của từ
    const baseTime = currentText.length * 3;
    timeLeft = baseTime;
    
    timerDisplayElement.textContent = `Thời gian: ${timeLeft}`;
    timerDisplayElement.style.display = "block";
    timerId = setInterval(() => {
        timeLeft--;
        timerDisplayElement.textContent = `Thời gian: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            hideTimer();
            gameOver();
        }
    }, 1000);
}

function hideTimer() {
    timerDisplayElement.style.display = "none";
    clearInterval(timerId);
}

playAgainButton.addEventListener("click", () => {
    // Ẩn màn hình game over
    gameOverOverlay.style.display = "none";
    body.classList.remove('game-over-screen');
    gameContainer.classList.remove('game-over-screen');
    
    // Reset game state
    score = 0;
    scoreDisplay.textContent = `Điểm: ${score}`;
    
    // Bắt đầu game mới ngay lập tức
    startGame();
});
startButton.addEventListener("click", startGame); 