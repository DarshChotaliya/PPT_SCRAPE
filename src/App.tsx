import React from 'react';
import Background3D from './components/Background3D';
import Presentation from './components/Presentation';
import Slide from './components/Slide';
import { motion } from 'framer-motion';
import {
  Server, Layout, Settings, Users, Database, Shield, Zap,
  TrendingUp, BarChart, Globe, HelpCircle, Heart
} from 'lucide-react';

// Roadmap Images
import week1Img from './assets/week1_foundation_auth_1773321257947.png';
import week2Img from './assets/week2_security_staff_1773321275104.png';
import week3Img from './assets/week3_inventory_pricing_1773321294447.png';
import week4Img from './assets/week4_logistics_containers_1773321312591.png';
import week5Img from './assets/week5_sales_transactions_1773321329642.png';
import week6Img from './assets/week6_reporting_analytics_1773321347822.png';
import week7Img from './assets/week7_data_integration_1773321364134.png';
import week8Img from './assets/week8_final_deployment_qa_1773321380901.png';

function App() {
  return (
    <main className="relative bg-[#050505] overflow-hidden min-h-screen">
      <Background3D />
      <div className="video-overlay" />
      <div className="vignette" />

      <Presentation>
        {/* ==================== SLIDE 1 - COVER ==================== */}
        <Slide>
          <div className="text-center space-y-4 md:space-y-6 min-h-[60vh] md:min-h-[75vh] flex flex-col justify-center px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 md:px-5 py-1 md:py-1.5 rounded-full border border-[#00f2fe]/40 bg-[#00f2fe]/10 text-[#00f2fe] text-[8px] md:text-[10px] tracking-[0.2em] uppercase mb-2 md:mb-4 glow-blue mx-auto"
            >
              Enterprise Scrap Management Solution
            </motion.div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl leading-tight font-black text-gradient tracking-tighter uppercase">
              Scrap Management<br />System
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-6 md:mt-12 max-w-5xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left space-y-2 md:space-y-4"
              >
                <p className="uppercase tracking-widest text-[#00f2fe]/50 text-[10px] md:text-xs font-mono">Team_Member</p>
                <div className="space-y-1 md:space-y-2 border-l border-[#00f2fe]/30 pl-4">
                  <p className="text-base md:text-xl font-bold text-white/90">Darsh Chotaliya – D23DCS146</p>
                  <p className="text-base md:text-xl font-bold text-white/90">Raj Ponkiya – D23DCS147</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-left space-y-4 md:space-y-6"
              >
                <div>
                  <p className="uppercase tracking-widest text-[#00f2fe]/50 text-[10px] md:text-xs font-mono">External_Guide</p>
                  <p className="text-base md:text-xl font-bold text-white/90 mt-1">Mr. Milan Agravat</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest text-[#00f2fe]/50 text-[10px] md:text-xs font-mono">Internal_Guides</p>
                  <p className="text-base md:text-xl font-bold text-white/90 mt-1">Prof. Rajesh Patel / Siddarth Shah</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-8 md:mt-10 text-[#00f2fe]/40 text-[9px] md:text-[11px] tracking-[0.5em] font-mono"
            >
              SYSTEM_LINK_ACTIVE • 2026
            </motion.div>
          </div>
        </Slide>

        {/* ==================== SLIDE 2 - OVERVIEW ==================== */}
        <Slide>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-[75vh] px-4">
            <div className="flex-1 space-y-4 md:space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-bold flex items-center gap-3 md:gap-5"
              >
                <Globe className="text-[#00f2fe] w-8 h-8 md:w-12 md:h-12" />
                Project Overview
              </motion.h2>
              <p className="text-lg md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                A complete digital ecosystem that transforms traditional scrap trading into a transparent, efficient, and profitable operation.
              </p>
              <ul className="space-y-4 md:space-y-6 text-sm md:text-xl pt-4 md:pt-6">
                {[
                  "End-to-end material tracking from purchase to sale",
                  "Smart container & logistics management",
                  "Real-time dynamic pricing engine",
                  "Role-based dashboards with analytics"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 md:gap-4"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#00f2fe]" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 md:w-64 md:h-64 glass-card rounded-full flex items-center justify-center border-[#00f2fe]/30 bg-[#00f2fe]/5 glow-blue shrink-0"
            >
              <Settings size={60} className="text-[#00f2fe]/30 md:hidden" />
              <Settings size={100} className="text-[#00f2fe]/30 hidden md:block" />
            </motion.div>
          </div>
        </Slide>

        {/* ==================== SLIDE 3 - PROBLEM ==================== */}
        <Slide>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-5xl font-bold text-gradient mb-8 md:mb-12 flex items-center gap-3 md:gap-5 justify-center"
          >
            <HelpCircle size={32} className="md:w-12 md:h-12" /> Problem Statement
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Settings, title: "Manual Tracking", desc: "Paper registers cause lost records and hours of manual entry" },
              { icon: Shield, title: "Data Errors", desc: "Wrong weights & rates lead to huge financial losses" },
              { icon: TrendingUp, title: "No Market Insight", desc: "Pricing is static while market rates change every hour" }
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="p-5 md:p-8 glass-card rounded-2xl border-red-500/30 hover:border-red-500/60 group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:rotate-12 transition-transform">
                  <problem.icon className="text-red-400" size={28} />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-3">{problem.title}</h3>
                <p className="text-[10px] md:text-sm text-white/50 text-center leading-relaxed">{problem.desc}</p>
              </motion.div>
            ))}
          </div>
        </Slide>

        {/* ==================== SLIDE 4 - SOLUTION ==================== */}
        <Slide>
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ scale: 0.6 }}
              whileInView={{ scale: 1 }}
              className="p-3 md:p-5 bg-[#00fe9b]/10 inline-block rounded-2xl mb-5 md:mb-8 glow-green"
            >
              <Zap size={40} className="text-[#00fe9b] md:hidden" />
              <Zap size={60} className="text-[#00fe9b] hidden md:block" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">The Digital Revolution</h2>
            <p className="text-xl md:text-3xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              From chaotic manual processes to a fully automated, transparent, and intelligent scrap ecosystem.
            </p>
          </div>
        </Slide>

        {/* ==================== SLIDE 5 - TECH STACK ==================== */}
        <Slide>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-12 text-center uppercase tracking-tighter">Built with Modern Tech</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {[
              { name: 'React + Vite', icon: Layout, desc: 'Lightning-fast UI' },
              { name: 'Tailwind CSS', icon: TrendingUp, desc: 'Responsive design' },
              { name: 'Node + Express', icon: Zap, desc: 'Blazing backend' },
              { name: 'MySQL', icon: Database, desc: 'Reliable data' },
              { name: 'JWT Security', icon: Shield, desc: 'Encrypted auth' },
              { name: 'Three.js', icon: Globe, desc: '3D visuals' }
            ].map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col md:flex-row gap-3 md:gap-4 p-3 md:p-5 glass-card rounded-xl md:rounded-2xl items-center md:items-start hover:bg-white/5 group border-white/5"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#00f2fe]/10 rounded-xl flex items-center justify-center text-[#00f2fe] group-hover:rotate-12 transition-transform shrink-0">
                    <Icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="text-center md:text-left overflow-hidden">
                    <h3 className="text-sm md:text-lg font-bold leading-tight truncate-two-lines uppercase tracking-tight">{tech.name}</h3>
                    <p className="text-[10px] md:text-xs text-white/40 mt-0.5 line-clamp-2">{tech.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Slide>

        {/* ==================== SLIDE 6 - ARCHITECTURE ==================== */}
        <Slide>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-center text-gradient uppercase">System Architecture</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-3 md:gap-4 h-[450px] md:h-[400px]">
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="col-span-2 glass-card rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col justify-end border-[#00f2fe]/20"
             >
                <Users className="text-[#00f2fe] mb-3 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                <h3 className="text-lg md:text-2xl font-bold mb-0.5 md:mb-1">User & Staff</h3>
                <p className="text-white/40 text-xs md:text-sm">Role-based access controls</p>
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="col-span-1 glass-card rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center border-[#00fe9b]/20"
             >
                <TrendingUp className="text-[#00fe9b] mb-1 md:mb-2" size={24} />
                <h3 className="text-xs md:text-lg font-bold">Rates</h3>
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="col-span-1 glass-card rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center border-[#00f2fe]/20"
             >
                <Database className="text-[#00f2fe] mb-1 md:mb-2" size={24} />
                <h3 className="text-xs md:text-lg font-bold">Inventory</h3>
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="col-span-1 glass-card rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col items-center justify-center text-center border-[#00fe9b]/20"
             >
                <Globe className="text-[#00fe9b] mb-1 md:mb-2" size={24} />
                <h3 className="text-xs md:text-lg font-bold">Logistics</h3>
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.02 }}
               className="col-span-1 md:col-span-3 glass-card rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col justify-end border-[#00f2fe]/20"
             >
                <BarChart className="text-[#00f2fe] mb-3 md:mb-4 w-6 h-6 md:w-8 md:h-8" />
                <h3 className="text-lg md:text-2xl font-bold mb-0.5 md:mb-1">Sales & Reports</h3>
                <p className="text-white/40 text-xs md:text-sm">Dynamic BI dashboards</p>
             </motion.div>
          </div>
        </Slide>

        {/* ==================== DETAILED ROADMAP SLIDES ==================== */}
        
        {/* WEEK 1: PROJECT INITIALIZATION */}
        <Slide>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-mono text-[10px] uppercase tracking-[0.2em] glow-blue">Phase 01: Secure Foundation</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Initialization<br />& Auth</h2>
                <p className="text-[#00fe9b] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: SECURE ACCESS & INFRA</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Project Setup", desc: "Digital ecosystem baseline with high-performance routing." },
                  { title: "Authentication Module", desc: "JWT secured onboarding (Login, Register, Profile)." },
                  { title: "Landing: Welcome", desc: "Strategic dash-entry point with interactive flow." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-gradient-to-br from-white/5 to-transparent hover:border-[#00f2fe]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <div className="w-1.5 h-6 bg-[#00f2fe] rounded-full" />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00f2fe]/30 shadow-2xl relative"
            >
              <img src={week1Img} alt="Week 1" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="font-mono text-[8px] text-[#00f2fe]/50">SECURE_KERNEL_INIT</p>
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 2: STAFF & SECURITY */}
        <Slide>
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00fe9b]/10 border border-[#00fe9b]/30 text-[#00fe9b] font-mono text-[10px] uppercase tracking-[0.2em] glow-green">Phase 02: Power Deployment</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Staff Control<br />& Security</h2>
                <p className="text-[#00f2fe] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: RBAC & ADMIN CORE</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Staff Management", desc: "Full-cycle CRUD infrastructure with real-time status orchestration." },
                  { title: "RBAC Integration", desc: "Layered Permission management for Admin vs Standard entities." },
                  { title: "Security & Logs", desc: "Audit logging and protected route hierarchy deployment." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-gradient-to-bl from-white/5 to-transparent hover:border-[#00fe9b]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <div className="w-1.5 h-6 bg-[#00fe9b] rounded-full" />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00fe9b]/30 shadow-2xl relative"
            >
              <img src={week2Img} alt="Week 2" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 3: MASTER DATA */}
        <Slide>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-mono text-[10px] uppercase tracking-[0.2em] glow-blue">Phase 03: The Data Heart</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Master Data<br />& Assets</h2>
                <p className="text-[#00fe9b] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: PRICING LOGIC CORE</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Item Management", desc: "The master interface for ultra-precise inventory configuration and specs." },
                  { title: "Inventory Listing", desc: "High-density view with multifaceted search and rapid filtering intelligence." },
                  { title: "Pricing Engine", desc: "Unified rate orchestration for dynamic global pricing updates." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-white/5"
                  >
                    <h4 className="font-black text-lg md:text-xl text-white flex items-center gap-2 uppercase">
                      <Database className="text-[#00f2fe]" size={18} /> {task.title}
                    </h4>
                    <p className="text-white/40 text-xs md:text-sm mt-1">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00f2fe]/30 shadow-2xl relative"
            >
              <img src={week3Img} alt="Week 3" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 4: LOGISTICS */}
        <Slide>
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00fe9b]/10 border border-[#00fe9b]/30 text-[#00fe9b] font-mono text-[10px] uppercase tracking-[0.2em] glow-green">Phase 04: Global Motion</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Logistics<br />& Containers</h2>
                <p className="text-[#00f2fe] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: CORE SHIPPING FLOW</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Container Entry", desc: "Complex intelligence to record shipping IDs, weights, and dimensions with zero-error." },
                  { title: "Inventory Link", desc: "Seamless integration linking specific items to physical containers." },
                  { title: "Logistics Sum", desc: "Real-time command center for tracking destinations, statuses, and history." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-white/5"
                  >
                    <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    <p className="text-white/40 text-xs md:text-sm mt-1 leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ rotateY: -30, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00fe9b]/30 shadow-2xl relative"
            >
              <img src={week4Img} alt="Week 4" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 5: SALES & TRANSACTION */}
        <Slide>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-mono text-[10px] uppercase tracking-[0.2em] glow-blue">Phase 05: Revenue Logic</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Sales<br />& Transact</h2>
                <p className="text-[#00fe9b] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: FINANCIAL ENGINE</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Sale Entry", desc: "Digital transactional form with real-time tax and subtotal orchestration." },
                  { title: "Pricing Sync", desc: "Automated fetching from the Rate Panel to ensure verified pricing." },
                  { title: "Ledger", desc: "Full breakdown of historical transactions with deep audit visibility." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-white/5 hover:border-[#00f2fe]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <Zap className="text-[#00f2fe]" size={20} />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00f2fe]/30 shadow-2xl relative"
            >
              <img src={week5Img} alt="Week 5" className="w-full h-full object-cover" />
              <div className="absolute bottom-5 left-5">
                 <div className="px-2 py-1 bg-[#00f2fe] text-black font-black rounded text-[8px] uppercase">Live</div>
              </div>
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 6: REPORTING & BI */}
        <Slide>
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00fe9b]/10 border border-[#00fe9b]/30 text-[#00fe9b] font-mono text-[10px] uppercase tracking-[0.2em] glow-green">Phase 06: Logic Prism</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Reporting<br />& Intelligence</h2>
                <p className="text-[#00f2fe] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: ACTIONABLE INSIGHTS</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Reporting Engine", desc: "Flexible aggregation by date range, item type, or staff with financial summaries." },
                  { title: "Visual Dashboard", desc: "Main analytical center with KPI widgets and real-time operational pulse." },
                  { title: "Quick Summary", desc: "Daily/monthly total snapshots for rapid executive decision making." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-gradient-to-br from-[#00fe9b]/5 to-transparent hover:border-[#00fe9b]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <BarChart className="text-[#00fe9b]" size={20} />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00fe9b]/30 shadow-2xl relative"
            >
              <img src={week6Img} alt="Week 6" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 7: INTEGRATION & OPTIMIZATION */}
        <Slide>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-mono text-[10px] uppercase tracking-[0.2em] glow-blue">Phase 07: Global Ecosystem</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Integration<br />& Advanced</h2>
                <p className="text-[#00fe9b] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: BULK OPERATIONS</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Excel: Bulk Import", desc: "Automated large-scale asset harvesting with deep validation guards." },
                  { title: "History Timeline", desc: "Deep temporal tracking of asset movements and container state shifts." },
                  { title: "UX Optimization", desc: "Frictionless navigation between modules for maximum speed." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-white/5 hover:border-[#00f2fe]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <Database className="text-[#00f2fe]" size={20} />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ rotate: 5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00f2fe]/30 shadow-2xl relative"
            >
              <img src={week7Img} alt="Week 7" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* WEEK 8: QA & FINAL LAUNCH */}
        <Slide>
          <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center min-h-[70vh]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="flex-1 space-y-6 md:space-y-8"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}>
                <span className="px-3 py-1 rounded-full bg-[#00fe9b]/10 border border-[#00fe9b]/30 text-[#00fe9b] font-mono text-[10px] uppercase tracking-[0.2em] glow-green">Phase 08: Mission Success</span>
                <h2 className="text-3xl md:text-5xl font-black text-gradient mt-2 leading-tight uppercase">Polished<br />& Deployed</h2>
                <p className="text-[#00f2fe] font-bold text-sm md:text-lg mt-1 tracking-wide font-mono uppercase">GOAL: PRODUCTION READY</p>
              </motion.div>
              
              <div className="grid gap-3 md:gap-4 mt-4">
                {[
                  { title: "Quality Assurance", desc: "Rigorous testing of Sales and Container cycles. Mobile responsiveness certified." },
                  { title: "Performance+", desc: "Optimizing large list rendering for zero-latency summaries." },
                  { title: "Production Build", desc: "Environment rollout including complete documentation handover." }
                ].map((task, i) => (
                  <motion.div 
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                    className="glass-card p-3 md:p-4 rounded-xl md:rounded-2xl border-white/5 bg-gradient-to-br from-[#00fe9b]/5 to-transparent hover:border-[#00fe9b]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                       <Shield className="text-[#00fe9b]" size={24} />
                       <h4 className="font-black text-lg md:text-xl text-white uppercase">{task.title}</h4>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm leading-tight">{task.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="flex-1 w-full lg:max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden border border-[#00fe9b]/30 shadow-2xl relative"
            >
              <img src={week8Img} alt="Week 8" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </Slide>

        {/* ==================== SLIDE 8 - KEY FEATURES ==================== */}
        <Slide>
           <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
             <div className="space-y-4 md:space-y-8 text-center lg:text-left">
               <h2 className="text-4xl md:text-6xl font-bold leading-tight">Advanced <br /> <span className="text-gradient">Capabilities</span></h2>
               <p className="text-white/50 text-sm md:text-xl leading-relaxed">Engineered for absolute reliability, performance, and security.</p>
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 className="bg-[#00f2fe]/10 p-5 md:p-8 rounded-2xl md:rounded-[2rem] border border-[#00f2fe]/30 glow-blue mx-auto lg:mx-0 max-w-[320px] md:max-w-none"
               >
                 <p className="text-[#00f2fe] font-mono text-[8px] md:text-xs tracking-widest mb-1 md:mb-2 uppercase">Real-time KPI</p>
                 <p className="text-2xl md:text-4xl lg:text-5xl font-black">99.9% TRACEABILITY</p>
                 <p className="text-[10px] md:text-sm text-white/30 mt-2 md:mt-3 font-light">Sub-second audit logging infrastructure.</p>
               </motion.div>
             </div>
             <div className="grid grid-cols-2 gap-3 md:gap-5 w-full">
                {[
                  'Role Based Access', 'Audit Logs', 'Container Tracking', 
                  'Dynamic Pricing', 'Sales Analytics', 'History Tracking'
                ].map((f, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-3 md:p-6 glass-card rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-center font-bold text-xs md:text-lg border-white/5 hover:bg-white/5 transition-all cursor-default min-h-[70px] md:min-h-[110px]"
                  >
                    {f}
                  </motion.div>
                ))}
             </div>
           </div>
        </Slide>

        {/* ==================== SLIDE 9 - WORKFLOW ==================== */}
        <Slide>
          <h2 className="text-3xl md:text-6xl font-black mb-12 md:mb-20 text-center text-gradient uppercase tracking-widest px-4">System Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 max-w-5xl mx-auto px-4">
             {[
               { name: 'Identity', icon: Users, color: '#00f2fe' },
               { name: 'Assets', icon: Database, color: '#00fe9b' },
               { name: 'Logistics', icon: Globe, color: '#00f2fe' },
               { name: 'Revenue', icon: TrendingUp, color: '#00fe9b' },
               { name: 'Insights', icon: BarChart, color: '#00f2fe' }
             ].map((step, i, arr) => {
               const StepIcon = step.icon;
               return (
                 <React.Fragment key={i}>
                   <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-row md:flex-col items-center gap-4 md:gap-6 w-full md:w-auto"
                   >
                      <motion.div 
                        whileHover={{ scale: 1.15 }}
                        className="w-16 h-16 md:w-28 md:h-28 glass-card rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white glow-blue border-white/10 shrink-0"
                        style={{ backgroundColor: `${step.color}15` }}
                      >
                        <StepIcon size={24} className="md:w-12 md:h-12" style={{ color: step.color }} />
                      </motion.div>
                      <span className="font-black text-sm md:text-lg uppercase tracking-widest text-left md:text-center w-full">{step.name}</span>
                   </motion.div>
                   {i < arr.length - 1 && (
                     <div className="hidden md:block h-1 flex-1 bg-gradient-to-r from-[#00f2fe]/30 to-[#00fe9b]/30 mx-4 rounded-full" />
                   )}
                 </React.Fragment>
               );
             })}
          </div>
        </Slide>

        {/* ==================== SLIDE 10 - FUTURE ==================== */}
        <Slide>
           <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-[75vh] px-4">
             <div className="flex-[1.5] space-y-4 md:space-y-6">
                <h2 className="text-3xl md:text-5xl font-black text-gradient leading-tight text-center lg:text-left uppercase">The Next Horizon</h2>
                <div className="grid gap-3 md:gap-4">
                  {[
                    { title: 'AI Prediction', icon: Zap, color: '#00fe9b', desc: 'Global market trend forecasting.' },
                    { title: 'Mobile Apps', icon: Layout, color: '#00f2fe', desc: 'Real-time field operation ecosystems.' },
                    { title: 'IoT Scale', icon: Server, color: '#ffffff', desc: 'Automated weight & barcode infra.' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10 }}
                      className="p-3 md:p-4 glass-card rounded-xl md:rounded-2xl flex items-center gap-4 border-white/5"
                    >
                       <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border border-white/10 shrink-0" style={{ backgroundColor: `${item.color}10`, color: item.color }}>
                         <item.icon size={20} className="md:w-6 md:h-6" />
                       </div>
                       <div>
                         <h4 className="font-bold text-base md:text-lg mb-0.5">{item.title}</h4>
                         <p className="text-white/40 text-[10px] md:text-xs">{item.desc}</p>
                       </div>
                    </motion.div>
                  ))}
                </div>
             </div>
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="hidden lg:flex flex-1 aspect-square glass-card rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden items-center justify-center p-6"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/20 to-[#00fe9b]/20 opacity-30" />
                <TrendingUp size={100} className="text-[#00f2fe]/10 lg:w-[150px]" />
             </motion.div>
           </div>
        </Slide>

        {/* ==================== SLIDE 11 - CONCLUSION ==================== */}
        <Slide>
          <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-10 px-4">
             <h2 className="text-3xl md:text-5xl font-bold text-gradient uppercase tracking-tighter">Conclusion</h2>
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="text-xl md:text-4xl text-white/90 leading-tight italic font-light"
             >
                “The Scrap Management System is the intelligence layer for a sustainable circular economy.”
             </motion.p>
             <p className="text-sm md:text-2xl text-white/40 leading-relaxed font-light md:px-20">
                Transforming waste into data-driven insights.
             </p>
             <div className="h-1 md:h-1.5 w-20 md:w-24 bg-gradient-to-r from-[#00f2fe] to-[#00fe9b] mx-auto rounded-full" />
          </div>
        </Slide>

        {/* ==================== SLIDE 12 - THANK YOU ==================== */}
        <Slide>
          <div className="text-center space-y-6 md:space-y-10 min-h-[60vh] flex flex-col justify-center">
             <motion.div
               animate={{ scale: [1, 1.1, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
             >
                <Heart size={40} className="text-red-500 mx-auto fill-red-500/20 md:w-16 md:h-16" />
             </motion.div>
             
             <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-black text-gradient tracking-tighter leading-none uppercase">THANK YOU!</h2>
             <p className="text-xl md:text-3xl text-white/30 tracking-[0.3em] font-mono uppercase">Any Questions?</p>
             
             <div className="mt-10 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center gap-6 md:gap-20 text-lg md:text-2xl opacity-50">
                <div>
                  <p className="text-[#00f2fe]">Darsh Chotaliya</p>
                  <p className="text-xs md:text-sm font-mono tracking-widest text-white/40">D23DCS146</p>
                </div>
                <div>
                  <p className="text-[#00fe9b]">Raj Ponkiya</p>
                  <p className="text-xs md:text-sm font-mono tracking-widest text-white/40">D23DCS147</p>
                </div>
             </div>
          </div>
        </Slide>
      </Presentation>
    </main>
  );
}

export default App;