# دليل رفع NEOPACK على GitHub Pages

## 🚀 الخطوات السريعة

### 1. إنشاء Repository جديد
1. اذهب إلى [github.com](https://github.com)
2. اضغط على زر **"New"** أو **"+"** في الأعلى
3. اختر **"New repository"**
4. املأ البيانات:
   - **Repository name**: `neopack-website`
   - **Description**: `NEOPACK Store - متجر الأكواب المخصصة بالذكاء الاصطناعي`
   - **Public** (مهم للـ Pages المجاني)
   - ✅ **Add a README file**
   - ✅ **Add .gitignore**: `Node`
   - ✅ **Choose a license**: `MIT License`
5. اضغط **"Create repository"**

### 2. رفع الملفات
#### الطريقة الأولى: عبر GitHub Web Interface
1. في repository الجديد، اضغط **"uploading an existing file"**
2. اسحب جميع ملفات مجلد `NEOPACK-Website-Final` إلى GitHub
3. اكتب رسالة commit: `Initial commit - NEOPACK Website`
4. اضغط **"Commit changes"**

#### الطريقة الثانية: عبر Git CLI
```bash
# في مجلد المشروع
cd NEOPACK-Website-Final

# تهيئة Git
git init
git add .
git commit -m "Initial commit - NEOPACK Website"

# ربط بـ GitHub
git remote add origin https://github.com/USERNAME/neopack-website.git
git branch -M main
git push -u origin main
```

### 3. تفعيل GitHub Pages
1. في repository، اذهب إلى **Settings**
2. في القائمة الجانبية، اضغط **Pages**
3. في **Source**، اختر **Deploy from a branch**
4. في **Branch**، اختر **main** و **/(root)**
5. اضغط **Save**
6. انتظر 2-5 دقائق حتى يتم النشر

### 4. الرابط النهائي
سيكون الرابط: `https://USERNAME.github.io/neopack-website`

## 📁 الملفات المطلوبة

تأكد من وجود هذه الملفات في repository:
```
neopack-website/
├── index.html
├── styles.css
├── script.js
├── README.md
├── deploy-guide.md
└── images/
    ├── favicon.svg
    └── logo-placeholder.svg
```

## 🔧 إعدادات إضافية

### إضافة Custom Domain (اختياري)
1. في Settings → Pages
2. في **Custom domain**، اكتب: `neopack.com`
3. اضغط **Save**
4. أضف DNS records في مزود النطاق

### تحسين SEO
الموقع محسن بـ:
- ✅ Meta tags
- ✅ Open Graph
- ✅ Twitter Cards
- ✅ Structured Data
- ✅ Favicon

## 📱 اختبار الموقع

بعد النشر:
1. افتح الرابط في المتصفح
2. اختبر جميع الأقسام
3. تأكد من عمل مصمم AI
4. اختبر التجاوب على الهاتف

## 🎯 المميزات المتاحة

- ✅ **HTTPS تلقائي**
- ✅ **CDN عالمي**
- ✅ **تحسينات تلقائية**
- ✅ **إحصائيات زوار**
- ✅ **نسخ احتياطية**

## 🔄 التحديثات المستقبلية

لتحديث الموقع:
1. عدّل الملفات محلياً
2. ارفع التغييرات:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. سيتم التحديث تلقائياً خلال دقائق

---

**ملاحظة**: GitHub Pages مجاني تماماً ويدعم HTTPS تلقائياً! 🚀 