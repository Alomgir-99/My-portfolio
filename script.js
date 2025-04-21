const navLinks = document.querySelectorAll('header nav a');
const logoLinks = document.querySelectorAll('.logo');
const section = document.querySelectorAll('section');

// অ্যাক্টিভ পেজের ক্লাস রিসেট করার ফাংশন
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    // সব বোতাম থেকে 'active' ক্লাস সরানো
    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    section.forEach(sec => {
        sec.classList.remove('active');
    });
};

// প্রতিটি `navLinks` এর জন্য ইভেন্ট লিসেনার
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage(); // সব লিঙ্কের `active` ক্লাস মুছে ফেলা হচ্ছে
            
            link.classList.add('active'); // বর্তমান লিঙ্কে `active` ক্লাস যোগ করা হচ্ছে
            
            setTimeout(() => {
                section[idx].classList.add('active'); // সংশ্লিষ্ট সেকশনে 'active' ক্লাস যোগ করা
            }, 1100);
        }     
    });
});

// প্রতিটি `logoLinks` এর জন্য ইভেন্ট লিসেনার
logoLinks.forEach(logo => {
    logo.addEventListener('click', () => {
        if (!navLinks[0].classList.contains('active')) {
            activePage(); // সব লিঙ্কের `active` ক্লাস মুছে ফেলা হচ্ছে
            navLinks[0].classList.add('active'); // প্রথম লিঙ্কে `active` ক্লাস যোগ করা হচ্ছে
        
            setTimeout(() => { 
                section[0].classList.add('active'); // প্রথম সেকশনে 'active' ক্লাস যোগ করা
            }, 1100);
        }
    });
});

// রিজিউম বোতামের জন্য ইভেন্ট লিসেনার
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        // সব বোতাম থেকে 'active' ক্লাস সরানো
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // ক্লিক করা বোতামে 'active' ক্লাস যোগ করা
        btn.classList.add('active');

        // সব ডিটেইল থেকে 'active' ক্লাস সরানো
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // সংশ্লিষ্ট ডিটেইলে 'active' ক্লাস যোগ করা
        resumeDetails[idx].classList.add('active');
    });
});
