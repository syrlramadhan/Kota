"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash'; // Import lodash debounce for search optimization
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Dummy data berita
const newsData = [
  {
    id: 1,
    title: "Seorang Pemuda asal palu viral karena kegantengan nya",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-26",
    category: "Viral",
    author: "Redaksi",
    readTime: "3 menit",
    views: "15.2K",
    excerpt: "Seorang Pemuda berusia 20 tahun membuat geger warga karena kegantengan nya, belakangan di ketahui pemuda itu berasal dari kampus STMIK Profesional Makassar.",
    featured: true,
  },
  {
    id: 2,
    title: "Pesona kumis CEO ganteng yang membuat wanita terpesona",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-26",
    category: "Lifestyle",
    author: "Tim Redaksi",
    readTime: "5 menit",
    views: "8.7K",
    excerpt: "Seorang Pria asal malino yang juga seorang CEO dari Kota Cloud membuat wanita terpesona dengan kumis eksotis nya.",
    featured: true,
  },
  {
    id: 3,
    title: "Teknologi AI Terbaru Mengubah Dunia Pendidikan",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-25",
    category: "Teknologi",
    author: "Tech Team",
    readTime: "7 menit",
    views: "12.3K",
    excerpt: "Perkembangan teknologi AI telah membawa perubahan signifikan dalam metode pembelajaran di berbagai institusi pendidikan.",
  },
  {
    id: 4,
    title: "Festival Budaya Nusantara Meriah di Palu",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-24",
    category: "Budaya",
    author: "Cultural Desk",
    readTime: "4 menit",
    views: "6.5K",
    excerpt: "Festival budaya tahunan di Kota Palu menarik ribuan pengunjung dari berbagai daerah untuk menyaksikan keragaman budaya Indonesia.",
  },
  {
    id: 5,
    title: "Startup Lokal Raih Pendanaan Miliaran Rupiah",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-23",
    category: "Bisnis",
    author: "Business Team",
    readTime: "6 menit",
    views: "9.8K",
    excerpt: "Sebuah startup teknologi asal Sulawesi Tengah berhasil mendapatkan pendanaan seri A senilai 50 miliar rupiah.",
  },
  {
    id: 6,
    title: "Tips Kesehatan: Menjaga Imunitas di Musim Hujan",
    image: "https://via.placeholder.com/400x300",
    date: "2025-09-22",
    category: "Kesehatan",
    author: "Health Editor",
    readTime: "5 menit",
    views: "7.2K",
    excerpt: "Dokter spesialis memberikan tips penting untuk menjaga kesehatan dan meningkatkan imunitas tubuh selama musim hujan.",
  },
];

const categories = [
  { name: "Semua", count: 156, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Viral", count: 42, color: "bg-gradient-to-r from-red-500 to-orange-500" },
  { name: "Teknologi", count: 38, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { name: "Lifestyle", count: 31, color: "bg-gradient-to-r from-green-500 to-teal-500" },
  { name: "Bisnis", count: 25, color: "bg-gradient-to-r from-yellow-500 to-amber-500" },
  { name: "Kesehatan", count: 20, color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState(newsData);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // Number of news items per page

  // Debounced search function
  const debouncedFilterNews = useCallback(
    debounce((query) => {
      let filtered = newsData;

      if (query) {
        filtered = filtered.filter(
          (news) =>
            news.title.toLowerCase().includes(query.toLowerCase()) ||
            news.excerpt.toLowerCase().includes(query.toLowerCase())
        );
      }

      setFilteredNews(filtered.slice(0, page * itemsPerPage));
    }, 300),
    [page]
  );

  useEffect(() => {
    debouncedFilterNews(searchQuery);
  }, [searchQuery, page, debouncedFilterNews]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsLoading(false);
    }, 1000);
  };

  const featuredNews = newsData.find((news) => news.featured);

  // Map category names to their colors for consistent usage
  const categoryColorMap = categories.reduce((acc, category) => {
    acc[category.name] = category.color;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">📰 Berita Terkini & Terpercaya</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              BERITA <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">UTAMA</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Dapatkan informasi terkini, analisis mendalam, dan berita eksklusif dari seluruh penjuru nusantara
            </p>
          </div>
        </div>
      </div>

      {/* Featured News Section */}
      {featuredNews ? (
        <div className="container mx-auto px-4 -mt-16 relative z-10 mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  BREAKING NEWS
                </span>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className={categoryColorMap[featuredNews.category] + " text-white px-3 py-1 rounded-full text-sm font-medium"}>
                    {featuredNews.category}
                  </span>
                  <span className="text-gray-500 text-sm">{formatDate(featuredNews.date)}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {featuredNews.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {featuredNews.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    aria-label={`Baca selengkapnya tentang ${featuredNews.title}`}
                  >
                    Baca Selengkapnya →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-500">Tidak ada berita unggulan saat ini.</p>
        </div>
      )}

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4">
            {/* News Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredNews.map((news, index) => (
                <div
                  key={news.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 left-3">
                      <span className={`${categoryColorMap[news.category]} px-3 py-1 rounded-full text-white text-xs font-bold`}>
                        {news.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between text-gray-500 text-sm mb-3">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(news.date)}
                      </div>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {news.readTime}
                      </span>
                    </div>

                    <h3 className="font-bold text-gray-800 text-lg mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <img
                          src="https://via.placeholder.com/24"
                          alt={`Foto profil ${news.author}`}
                          className="w-6 h-6 rounded-full mr-2"
                        />
                        <span>{news.author}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {news.views}
                        </span>
                        <button
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`Baca selengkapnya tentang ${news.title}`}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {filteredNews.length > 0 && filteredNews.length < newsData.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={isLoading}
                  className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Muat lebih banyak berita"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </div>
                  ) : (
                    <span className="flex items-center">
                      Muat Lebih Banyak
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
            )}

            {/* No Results */}
            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada berita ditemukan</h3>
                <p className="text-gray-500">Coba ubah kata kunci pencarian</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;