document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.getElementById('star-container');
    const heartContainer = document.getElementById('heart-container');
    const backgroundMusic = document.getElementById('background-music');

    // --- TẠO SAO LẤP LÁNH ---
    const numStars = 150; // Số lượng sao
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3 + 5}px`; // Kích thước ngẫu nhiên 1-4px
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        // Tốc độ và thời gian delay nhấp nháy ngẫu nhiên
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 1-3s
        star.style.animationDelay = `${Math.random() * 2}s`; // 0-2s
        starContainer.appendChild(star);
    }

    // --- TẠO TRÁI TIM TỪ ẢNH ---
    // THAY THẾ BẰNG DANH SÁCH 10 LINK ẢNH CỦA BẠN
   // --- TẠO TRÁI TIM TỪ ẢNH ---
// Dán 10 link ảnh trực tiếp tại đây:
        const userImageUrls = [
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg",
        "https://i.postimg.cc/sgS4JCQp/emxinhdepvalunglinh.jpg"

        ];


    const totalImagesInHeart = 60; // Tổng số ảnh để tạo thành trái tim lớn (nhân bản từ 10 ảnh gốc)
    const imagesToPlace = [];

    for (let i = 0; i < totalImagesInHeart; i++) {
        imagesToPlace.push(userImageUrls[i % userImageUrls.length]); // Lặp lại 10 ảnh gốc
    }

    // Hàm tạo trái tim từ ảnh
    function createHeartFromImages() {
        const heartWidth = heartContainer.offsetWidth;
        const heartHeight = heartContainer.offsetHeight;
        const centerX = heartWidth / 2;
        const centerY = heartHeight / 2;

        // Điều chỉnh các hằng số này để thay đổi hình dạng và kích thước của "đám mây" ảnh hình trái tim
        const scaleX = heartWidth / 35; // Chia cho một số để scale tọa độ trái tim
        const scaleY = heartHeight / 35;

        imagesToPlace.forEach((imageUrl, index) => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.classList.add('heart-image');

            // Tính toán vị trí theo phương trình tham số của trái tim
            // t đi từ 0 đến 2*PI
            const t = (index / totalImagesInHeart) * 2 * Math.PI;

            // Phương trình tham số đơn giản cho trái tim
            // Bạn có thể tìm các phương trình phức tạp hơn để có hình dạng đẹp hơn
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

            // Chuyển đổi tọa độ và căn giữa
            img.style.left = `${centerX + x * scaleX - (img.width || 50) / 2}px`;
            img.style.top = `${centerY + y * scaleY - (img.height || 50) / 2}px`;

            // Hiệu ứng xuất hiện chuyên nghiệp: delay ngẫu nhiên hoặc tuần tự
            img.style.animationDelay = `${index * 0.05}s`; // Mỗi ảnh xuất hiện cách nhau 0.05s

            heartContainer.appendChild(img);
        });
    }

    createHeartFromImages();


    // --- PHÁT NHẠC NỀN ---
    // Cố gắng tự động phát nhạc.
    // Lưu ý: Nhiều trình duyệt chặn autoplay cho đến khi người dùng tương tác.
    function playMusic() {
        backgroundMusic.play()
            .then(() => {
                console.log("Nhạc nền đã phát!");
            })
            .catch(error => {
                console.log("Không thể tự động phát nhạc, cần người dùng tương tác: ", error);
                // Có thể hiển thị một nút "Play Music" nếu muốn
                // document.body.addEventListener('click', () => backgroundMusic.play(), { once: true });
            });
    }

    // Để đảm bảo an toàn, bạn có thể đợi một chút rồi mới phát nhạc
    // hoặc chờ người dùng click (xem comment ở trên)
    // setTimeout(playMusic, 1000); // Phát sau 1 giây

    // Hoặc, bạn có thể yêu cầu người dùng click để bắt đầu trải nghiệm và phát nhạc
    const startButton = document.createElement('button');
    startButton.textContent = '❤️❤️';
    startButton.style.position = 'fixed';
    startButton.style.bottom = '20px';
    startButton.style.left = '50%';
    startButton.style.transform = 'translateX(-50%)';
    startButton.style.padding = '10px 20px';
    startButton.style.fontSize = '16px';
    startButton.style.backgroundColor = '#FF69B4'; // Màu hồng
    startButton.style.color = 'white';
    startButton.style.border = 'none';
    startButton.style.borderRadius = '5px';
    startButton.style.cursor = 'pointer';
    startButton.style.zIndex = '1000';

    document.body.appendChild(startButton);

    startButton.addEventListener('click', () => {
        playMusic();
        startButton.style.display = 'none'; // Ẩn nút sau khi click
    }, { once: true });


    // Điều chỉnh lại vị trí ảnh khi kích thước cửa sổ thay đổi (tùy chọn)
    // window.addEventListener('resize', () => {
    //     heartContainer.innerHTML = ''; // Xóa ảnh cũ
    //     createHeartFromImages(); // Vẽ lại
    // });
});