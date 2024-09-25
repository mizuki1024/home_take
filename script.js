document.addEventListener('DOMContentLoaded', () => {
    const section6 = document.getElementById('section6');
    const gallerySections = document.querySelectorAll("[data-top-gallery-list]");

    gallerySections.forEach(galleryList => {
        const galleryItems = galleryList.querySelectorAll("li");

        // リストのクローンを作成し、元のリストの下に追加（無限ループを実現）
        galleryItems.forEach(item => {
            const clone = item.cloneNode(true);
            galleryList.appendChild(clone);
        });

        // 左右のギャラリーで異なるアニメーションスピードと方向を設定
        if (galleryList.closest('.--left')) {
            galleryList.style.animation = `gallery-animation ${galleryItems.length * 10}s linear infinite`;
        } else if (galleryList.closest('.--right')) {
            galleryList.style.animation = `gallery-animation ${galleryItems.length * 10}s linear infinite reverse`;
        }
    });

    // スクロールしてセクション6が表示されたらガラスモーフィズムを適用
    window.addEventListener('scroll', () => {
        const sectionPosition = section6.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight && sectionPosition > 0) {
            section6.classList.add('glassmorphism');
        } else {
            section6.classList.remove('glassmorphism');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');

    // カードのクローンを作成し、元のリストの最後に追加
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        cardsContainer.appendChild(clone);
    });

    // アニメーションの長さをカードの数に応じて調整
    cardsContainer.style.animation = `scroll-left ${cards.length * 10}s linear infinite`;
});
document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.getElementById('section2');

    // スクロール時に要素が表示されたらフェードイン
    window.addEventListener('scroll', () => {
        const sectionPosition = section2.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // セクションが画面内に入ったらフェードインクラスを追加
        if (sectionPosition < windowHeight && sectionPosition > 0) {
            section2.classList.add('fade-in');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.getElementById('section2');

    window.addEventListener('scroll', () => {
        const sectionPosition = section2.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // セクション2が画面内に入っているとき
        if (sectionPosition < windowHeight && sectionPosition > 0) {
            // スクロール量に応じてぼかしや透明度を調整
            const blurAmount = Math.min(15, (windowHeight - sectionPosition) / windowHeight * 15); // 最大15pxのぼかし
            const opacityAmount = Math.min(0.3, (windowHeight - sectionPosition) / windowHeight * 0.3); // 最大0.3の透明度

            section2.style.backdropFilter = `blur(${blurAmount}px)`;
            section2.style.backgroundColor = `rgba(255, 255, 255, ${opacityAmount})`;
        } else {
            // セクション2が画面外にあるときは効果をリセット
            section2.style.backdropFilter = 'blur(0px)';
            section2.style.backgroundColor = 'rgba(255, 255, 255, 0)';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.getElementById('section2');
    const fadeInElements = section2.querySelectorAll('.fade-in-left, .fade-in-right');

    // スクロール時に要素が表示されたらフェードイン
    window.addEventListener('scroll', () => {
        const sectionPosition = section2.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // セクションが画面内に入ったらフェードインクラスを追加
        if (sectionPosition < windowHeight && sectionPosition > 0) {
            fadeInElements.forEach(element => {
                element.classList.add('fade-in');
            });
        } else {
            fadeInElements.forEach(element => {
                element.classList.remove('fade-in');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const textContent = document.querySelector('.text-content');

    // スクロール時にテキストが画面内に入ったらフェードイン
    window.addEventListener('scroll', () => {
        const sectionPosition = textContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight && sectionPosition > 0) {
            textContent.classList.add('fade-in');
        } else {
            textContent.classList.remove('fade-in');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const section2 = document.getElementById('section2');

    window.addEventListener('scroll', () => {
        const sectionPosition = section2.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // セクション2が画面内に入ったときにガラスモーフィズムを適用
        if (sectionPosition < windowHeight && sectionPosition > 0) {
            const scrollRatio = sectionPosition / windowHeight;

            // スクロール量に応じてぼかしや透明度を徐々に解除
            const blurAmount = Math.min(15, scrollRatio * 15); // 最大15pxのぼかし
            const opacityAmount = Math.min(0.3, scrollRatio * 0.3); // 最大0.3の透明度

            section2.style.backdropFilter = `blur(${blurAmount}px)`;
            section2.style.backgroundColor = `rgba(255, 255, 255, ${opacityAmount})`;
        } else if (sectionPosition <= 0) {
            // セクションが完全にスクロールアウトしたらガラスモーフィズムを解除
            section2.classList.add('no-glass');
        } else {
            // セクションがまだ完全に表示されていない場合、ガラスモーフィズムを適用
            section2.classList.remove('no-glass');
        }
    });
});
