"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus, Trash2, Edit, Save, X, Calendar, FileText,
  LayoutDashboard, LogOut, ChevronRight, Users, Handshake,
} from "lucide-react";
import { supabase } from "@/src/lib/supabase";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import Navbar from "../components/Navbar";

/* ---------- TYPES ---------- */

type Content = {
  id: number;
  img_head: string | null;
  head: string;
  detail: string | null;
  word: string | null;
  author: string | null;
  created_at: string;
};

type Event = {
  id: number;
  status: string | null;
  name_th: string;
  name_en: string;
  link: string | null;
  text_th: string | null;
  text_en: string | null;
  image: string | null;
  year: string;
  created_at: string;
};

type Team = {
  id: number;
  name_en: string;
  name_th: string;
  desc_en: string;
  desc_th: string;
  link: string;
  category: "main" | "sub";
  order_num: number;
  created_at: string;
};

type Partner = {
  id: number;
  name: string;
  logo_url: string;
  created_at?: string;
};

type ActiveTab = "events" | "articles" | "teams" | "partners";

/* ---------- IMAGE UPLOAD FIELDS ---------- */
const CONTENT_IMAGE_FIELDS = ["img_head"];
const EVENT_IMAGE_FIELDS = ["image"];
const PARTNER_IMAGE_FIELDS = ["logo_url"];

/* ---------- UPLOAD HELPER ---------- */

async function uploadImageToSupabase(file: File, bucket: string): Promise<string | null> {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
  const { error } = await supabase.storage.from(bucket).upload(fileName, file, { upsert: false });
  if (error) { alert(`Upload failed: ${error.message}`); return null; }
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
  return data.publicUrl;
}

/* ===================================================================
   MAIN DASHBOARD
   =================================================================== */

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ActiveTab>("events");

  /* --- Data State --- */
  const [contents, setContents] = useState<Content[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  /* --- Modal / Editing State --- */
  const [editingContent, setEditingContent] = useState<Partial<Content> | null>(null);
  const [editingEvent, setEditingEvent] = useState<Partial<Event> | null>(null);
  const [editingTeam, setEditingTeam] = useState<Partial<Team> | null>(null);
  const [editingPartner, setEditingPartner] = useState<Partial<Partner> | null>(null);

  /* ---------- AUTH ---------- */
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push("/login");
      else { setUser(data.session.user); setLoading(false); }
    });
  }, [router]);

  /* ---------- FETCH DATA ---------- */
  useEffect(() => {
    if (!user) return;
    supabase.from("contents").select("*").order("id").then(({ data }) => { if (data) setContents(data); });
    supabase.from("events").select("*").order("id").then(({ data }) => { if (data) setEvents(data); });
    supabase.from("teams").select("*").order("order_num", { ascending: true }).then(({ data }) => { if (data) setTeams(data); });
    supabase.from("partners").select("*").order("id", { ascending: true }).then(({ data }) => { if (data) setPartners(data); });
  }, [user]);

  /* ---------- CONTENT HANDLERS ---------- */

  const handleSaveContent = async (form: Omit<Content, "id" | "created_at">) => {
    if (!form.head) return alert("Headline is required");
    if (editingContent?.id) {
      await supabase.from("contents").update(form).eq("id", editingContent.id);
      setContents(prev => prev.map(i => i.id === editingContent.id ? { ...i, ...form } : i));
    } else {
      const { data } = await supabase.from("contents").insert(form).select().single();
      if (data) setContents(prev => [...prev, data]);
    }
    setEditingContent(null);
  };

  const deleteContent = async (id: number) => {
    if (!confirm("ลบ content นี้?")) return;
    await supabase.from("contents").delete().eq("id", id);
    setContents(prev => prev.filter(i => i.id !== id));
  };

  /* ---------- EVENT HANDLERS ---------- */

  const handleSaveEvent = async (form: Omit<Event, "id" | "created_at">) => {
    if (!form.name_en || !form.year) return alert("Required fields missing");
    if (editingEvent?.id) {
      await supabase.from("events").update(form).eq("id", editingEvent.id);
      setEvents(prev => prev.map(i => i.id === editingEvent.id ? { ...i, ...form } : i));
    } else {
      const { data } = await supabase.from("events").insert(form).select().single();
      if (data) setEvents(prev => [...prev, data]);
    }
    setEditingEvent(null);
  };

  const deleteEvent = async (id: number) => {
    if (!confirm("ลบ event นี้?")) return;
    await supabase.from("events").delete().eq("id", id);
    setEvents(prev => prev.filter(i => i.id !== id));
  };

  /* ---------- TEAM HANDLERS ---------- */

  const handleSaveTeam = async (form: Omit<Team, "id" | "created_at">) => {
    if (!form.name_en || !form.name_th) return alert("Required fields missing");
    if (editingTeam?.id) {
      await supabase.from("teams").update(form).eq("id", editingTeam.id);
      setTeams(prev => prev.map(i => i.id === editingTeam.id ? { ...i, ...form } : i));
    } else {
      const { data } = await supabase.from("teams").insert([form]).select().single();
      if (data) setTeams(prev => [...prev, data]);
    }
    setEditingTeam(null);
  };

  const deleteTeam = async (id: number) => {
    if (!confirm("ลบ team นี้?")) return;
    await supabase.from("teams").delete().eq("id", id);
    setTeams(prev => prev.filter(i => i.id !== id));
  };

  /* ---------- PARTNER HANDLERS ---------- */

  const handleSavePartner = async (form: Omit<Partner, "id" | "created_at">) => {
    if (!form.name || !form.logo_url) return alert("กรุณาใส่ชื่อและอัปโหลดโลโก้");
    if (editingPartner?.id) {
      await supabase.from("partners").update(form).eq("id", editingPartner.id);
      setPartners(prev => prev.map(p => p.id === editingPartner.id ? { ...p, ...form } : p));
    } else {
      const { data } = await supabase.from("partners").insert(form).select().single();
      if (data) setPartners(prev => [...prev, data]);
    }
    setEditingPartner(null);
  };

  const deletePartner = async (id: number) => {
    if (!confirm("ลบ Partner นี้?")) return;
    await supabase.from("partners").delete().eq("id", id);
    setPartners(prev => prev.filter(p => p.id !== id));
  };

  /* ---------- HELPERS ---------- */

  const getAddLabel = () => {
    if (activeTab === "events") return "Event";
    if (activeTab === "articles") return "Article";
    if (activeTab === "teams") return "Team";
    return "Partner";
  };

  const handleAddNew = () => {
    if (activeTab === "events") setEditingEvent({});
    else if (activeTab === "articles") setEditingContent({});
    else if (activeTab === "teams") setEditingTeam({});
    else setEditingPartner({});
  };

  if (!user || loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-10 h-10 border-4 border-amsa-blue border-t-transparent rounded-full animate-spin" />
    </div>
  );

  /* ---------- SIDEBAR NAV ITEMS ---------- */
  const navItems: { key: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { key: "events",   label: "Events",   icon: <Calendar size={20} /> },
    { key: "articles", label: "Articles", icon: <FileText size={20} /> },
    { key: "teams",    label: "Teams",    icon: <Users size={20} /> },
    { key: "partners", label: "Partners", icon: <Handshake size={20} /> },
  ];

  /* ======================== RENDER ======================== */

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 pt-16 flex">

        {/* ── Sidebar ── */}
        <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full pt-10 z-40">
          <div className="px-6 mb-10">
            <div className="flex items-center gap-3 mb-2">
              <LayoutDashboard size={24} className="text-amsa-blue" />
              <h1 className="font-serif font-bold text-xl text-white">Console</h1>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-widest">AMSA-Thailand Admin</p>
          </div>

          <nav className="flex-grow">
            {navItems.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`w-full flex items-center gap-4 px-6 py-4 transition-all ${
                  activeTab === key
                    ? "bg-amsa-blue text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {icon}
                <span className="font-medium">{label}</span>
                {activeTab === key && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-white/10 space-y-4">
            <div className="text-xs text-slate-500 truncate">{user.email}</div>
            <Link href="/" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <LogOut size={20} className="rotate-180" />
              <span className="font-medium">Back to Site</span>
            </Link>
            <LogoutButton />
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-grow ml-64 p-10">
          <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2 capitalize">
                  Manage {activeTab}
                </h2>
                <p className="text-slate-500">Update and manage organization content across the platform.</p>
              </div>
              <button
                onClick={handleAddNew}
                className="bg-amsa-blue text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-amsa-blue/20 hover:opacity-90 transition-all"
              >
                <Plus size={20} /> Add New {getAddLabel()}
              </button>
            </div>

            {/* ── Events Tab ── */}
            {activeTab === "events" && (
              <div className="grid grid-cols-1 gap-6">
                {events.map(event => (
                  <ItemCard
                    key={event.id}
                    image={event.image}
                    icon={<Calendar size={32} />}
                    badge={event.status}
                    badgeColor={event.status === "Active" ? "green" : "amber"}
                    meta={event.year}
                    title={event.name_en}
                    subtitle={event.text_en ?? ""}
                    onEdit={() => setEditingEvent(event)}
                    onDelete={() => deleteEvent(event.id)}
                  />
                ))}
                {events.length === 0 && <EmptyState label="events" />}
              </div>
            )}

            {/* ── Articles Tab ── */}
            {activeTab === "articles" && (
              <div className="grid grid-cols-1 gap-6">
                {contents.map(article => (
                  <ItemCard
                    key={article.id}
                    image={article.img_head}
                    icon={<FileText size={32} />}
                    meta={article.author ?? ""}
                    title={article.head}
                    subtitle={article.detail ?? ""}
                    onEdit={() => setEditingContent(article)}
                    onDelete={() => deleteContent(article.id)}
                  />
                ))}
                {contents.length === 0 && <EmptyState label="articles" />}
              </div>
            )}

            {/* ── Teams Tab ── */}
            {activeTab === "teams" && (
              <div className="grid grid-cols-1 gap-6">
                {teams.map(team => (
                  <ItemCard
                    key={team.id}
                    icon={<Users size={32} />}
                    badge={team.category}
                    badgeColor={team.category === "main" ? "blue" : "gray"}
                    meta={`Order: ${team.order_num}`}
                    title={team.name_en}
                    subtitle={team.name_th}
                    onEdit={() => setEditingTeam(team)}
                    onDelete={() => deleteTeam(team.id)}
                  />
                ))}
                {teams.length === 0 && <EmptyState label="teams" />}
              </div>
            )}

            {/* ── Partners Tab ── */}
            {activeTab === "partners" && (
              <div className="grid grid-cols-1 gap-6">
                {partners.map(p => (
                  <ItemCard
                    key={p.id}
                    image={p.logo_url}
                    icon={<Handshake size={32} />}
                    title={p.name}
                    subtitle=""
                    onEdit={() => setEditingPartner(p)}
                    onDelete={() => deletePartner(p.id)}
                  />
                ))}
                {partners.length === 0 && <EmptyState label="partners" />}
              </div>
            )}
          </div>
        </main>

        {/* ── Event Modal ── */}
        <AnimatePresence>
          {editingEvent !== null && (
            <Modal
              title={editingEvent.id ? "Edit Event" : "Create New Event"}
              onClose={() => setEditingEvent(null)}
            >
              <EventForm
                initial={editingEvent}
                onSave={handleSaveEvent}
                onCancel={() => setEditingEvent(null)}
              />
            </Modal>
          )}
        </AnimatePresence>

        {/* ── Article Modal ── */}
        <AnimatePresence>
          {editingContent !== null && (
            <Modal
              title={editingContent.id ? "Edit Article" : "Create New Article"}
              onClose={() => setEditingContent(null)}
            >
              <ContentForm
                initial={editingContent}
                onSave={handleSaveContent}
                onCancel={() => setEditingContent(null)}
              />
            </Modal>
          )}
        </AnimatePresence>

        {/* ── Team Modal ── */}
        <AnimatePresence>
          {editingTeam !== null && (
            <Modal
              title={editingTeam.id ? "Edit Team" : "Create New Team"}
              onClose={() => setEditingTeam(null)}
            >
              <TeamForm
                initial={editingTeam}
                onSave={handleSaveTeam}
                onCancel={() => setEditingTeam(null)}
              />
            </Modal>
          )}
        </AnimatePresence>

        {/* ── Partner Modal ── */}
        <AnimatePresence>
          {editingPartner !== null && (
            <Modal
              title={editingPartner.id ? "Edit Partner" : "Add New Partner"}
              onClose={() => setEditingPartner(null)}
            >
              <PartnerForm
                initial={editingPartner}
                onSave={handleSavePartner}
                onCancel={() => setEditingPartner(null)}
              />
            </Modal>
          )}
        </AnimatePresence>

      </div>
    </>
  );
}

/* ===================================================================
   SHARED UI COMPONENTS
   =================================================================== */

/** Reusable item card */
function ItemCard({
  image, icon, badge, badgeColor = "gray", meta, title, subtitle, onEdit, onDelete,
}: {
  image?: string | null;
  icon: React.ReactNode;
  badge?: string | null;
  badgeColor?: "green" | "amber" | "blue" | "gray";
  meta?: string;
  title: string;
  subtitle: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const badgeClasses: Record<string, string> = {
    green: "bg-green-100 text-green-700",
    amber: "bg-amber-100 text-amber-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-slate-100 text-slate-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-6 hover:border-amsa-blue transition-all">
      <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden shrink-0 flex items-center justify-center text-slate-300">
        {image ? <img src={image} alt="" className="w-full h-full object-cover" /> : icon}
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          {badge && (
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${badgeClasses[badgeColor]}`}>
              {badge}
            </span>
          )}
          {meta && <span className="text-xs text-slate-400">{meta}</span>}
        </div>
        <h3 className="text-xl font-bold text-slate-900 truncate">{title}</h3>
        <p className="text-sm text-slate-500 truncate">{subtitle}</p>
      </div>
      <div className="flex gap-2 shrink-0">
        <button onClick={onEdit} className="p-3 text-slate-400 hover:text-amsa-blue hover:bg-amsa-blue/5 rounded-xl transition-all">
          <Edit size={20} />
        </button>
        <button onClick={onDelete} className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center py-20 text-slate-400">
      <p className="text-lg">No {label} yet.</p>
      <p className="text-sm mt-1">Click "Add New" to get started.</p>
    </div>
  );
}

/** Reusable modal wrapper */
function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-sm bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.18 }}
        className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-2xl font-serif font-bold text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto flex-grow">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/** Shared styled field components */
const inputCls = "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amsa-blue transition-colors";
const labelCls = "text-xs font-bold uppercase tracking-widest text-slate-400";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function FormFooter({ onCancel, saveLabel = "Save" }: { onCancel: () => void; saveLabel?: string }) {
  return (
    <div className="flex gap-4 pt-4 sticky bottom-0 bg-white pb-2 border-t border-slate-100 px-8">
      <button type="submit" className="flex-grow bg-amsa-blue text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
        <Save size={20} /> {saveLabel}
      </button>
      <button type="button" onClick={onCancel} className="px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all">
        Cancel
      </button>
    </div>
  );
}

/** Image upload field with preview */
function ImageUploadField({
  label, value, onChange, bucket,
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  bucket: string;
}) {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setUploading(true);
    const url = await uploadImageToSupabase(file, bucket);
    if (url) onChange(url);
    setUploading(false);
  };

  return (
    <Field label={label}>
      {value && (
        <div className="flex items-center gap-3 mb-2">
          <img src={value} alt="preview" className="h-20 w-auto object-cover rounded-xl border border-slate-200" />
          <button type="button" onClick={() => onChange("")} className="text-red-500 text-xs font-medium hover:underline">
            Remove
          </button>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        disabled={uploading}
        className={`${inputCls} file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-amsa-blue/10 file:text-amsa-blue cursor-pointer`}
        onChange={e => handleFile(e.target.files?.[0])}
      />
      {uploading && <p className="text-xs text-slate-400 mt-1">กำลังอัปโหลด...</p>}
    </Field>
  );
}

/* ===================================================================
   FORM COMPONENTS
   =================================================================== */

function EventForm({
  initial, onSave, onCancel,
}: {
  initial: Partial<Event>;
  onSave: (form: Omit<Event, "id" | "created_at">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Event, "id" | "created_at">>({
    status: initial.status ?? "",
    name_th: initial.name_th ?? "",
    name_en: initial.name_en ?? "",
    link: initial.link ?? "",
    text_th: initial.text_th ?? "",
    text_en: initial.text_en ?? "",
    image: initial.image ?? "",
    year: initial.year ?? "",
  });
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="p-8 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Field label="Status">
          <select value={form.status ?? ""} onChange={e => set("status", e.target.value)} className={inputCls}>
            <option value="Active">Active</option>
            <option value="Upcoming">Upcoming</option>
            <option value="Past">Past</option>
          </select>
        </Field>
        <Field label="Year">
          <input type="text" value={form.year} onChange={e => set("year", e.target.value)} className={inputCls} placeholder="2025" required />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Field label="Name (EN)">
          <input type="text" value={form.name_en} onChange={e => set("name_en", e.target.value)} className={inputCls} required />
        </Field>
        <Field label="Name (TH)">
          <input type="text" value={form.name_th} onChange={e => set("name_th", e.target.value)} className={inputCls} required />
        </Field>
      </div>
      <ImageUploadField
        label="Event Image"
        value={form.image ?? ""}
        onChange={url => set("image", url)}
        bucket="events-images"
      />
      <Field label="Registration Link">
        <input type="text" value={form.link ?? ""} onChange={e => set("link", e.target.value)} className={inputCls} />
      </Field>
      <div className="grid grid-cols-2 gap-6">
        <Field label="Text (EN)">
          <textarea value={form.text_en ?? ""} onChange={e => set("text_en", e.target.value)} className={`${inputCls} h-32`} />
        </Field>
        <Field label="Text (TH)">
          <textarea value={form.text_th ?? ""} onChange={e => set("text_th", e.target.value)} className={`${inputCls} h-32`} />
        </Field>
      </div>
      <FormFooter onCancel={onCancel} saveLabel="Save Event" />
    </form>
  );
}

function ContentForm({
  initial, onSave, onCancel,
}: {
  initial: Partial<Content>;
  onSave: (form: Omit<Content, "id" | "created_at">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Content, "id" | "created_at">>({
    img_head: initial.img_head ?? "",
    head: initial.head ?? "",
    detail: initial.detail ?? "",
    word: initial.word ?? "",
    author: initial.author ?? "",
  });
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="p-8 space-y-6">
      <Field label="Headline">
        <input type="text" value={form.head} onChange={e => set("head", e.target.value)} className={inputCls} required />
      </Field>
      <div className="grid grid-cols-2 gap-6">
        <Field label="Author">
          <input type="text" value={form.author ?? ""} onChange={e => set("author", e.target.value)} className={inputCls} />
        </Field>
      </div>
      <ImageUploadField
        label="Main Image"
        value={form.img_head ?? ""}
        onChange={url => set("img_head", url)}
        bucket="contents-images"
      />
      <Field label="Short Detail (Teaser)">
        <textarea value={form.detail ?? ""} onChange={e => set("detail", e.target.value)} className={`${inputCls} h-20`} />
      </Field>
      <Field label="Full Content (Markdown or Text)">
        <textarea value={form.word ?? ""} onChange={e => set("word", e.target.value)} className={`${inputCls} h-64`} />
      </Field>
      <FormFooter onCancel={onCancel} saveLabel="Save Article" />
    </form>
  );
}

function TeamForm({
  initial, onSave, onCancel,
}: {
  initial: Partial<Team>;
  onSave: (form: Omit<Team, "id" | "created_at">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Team, "id" | "created_at">>({
    name_en: initial.name_en ?? "",
    name_th: initial.name_th ?? "",
    desc_en: initial.desc_en ?? "",
    desc_th: initial.desc_th ?? "",
    link: initial.link ?? "",
    category: initial.category ?? "main",
    order_num: initial.order_num ?? 1,
  });
  const set = (k: keyof typeof form, v: any) => setForm(f => ({ ...f, [k]: v }));

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="p-8 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <Field label="Name (EN)">
          <input type="text" value={form.name_en} onChange={e => set("name_en", e.target.value)} className={inputCls} required />
        </Field>
        <Field label="Name (TH)">
          <input type="text" value={form.name_th} onChange={e => set("name_th", e.target.value)} className={inputCls} required />
        </Field>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <Field label="Category">
          <select value={form.category} onChange={e => set("category", e.target.value as "main" | "sub")} className={inputCls}>
            <option value="main">Main</option>
            <option value="sub">Sub</option>
          </select>
        </Field>
        <Field label="Order">
          <input type="number" value={form.order_num} onChange={e => set("order_num", Number(e.target.value))} className={inputCls} min={1} />
        </Field>
      </div>
      <Field label="Description (EN)">
        <textarea value={form.desc_en} onChange={e => set("desc_en", e.target.value)} className={`${inputCls} h-24`} />
      </Field>
      <Field label="Description (TH)">
        <textarea value={form.desc_th} onChange={e => set("desc_th", e.target.value)} className={`${inputCls} h-24`} />
      </Field>
      <Field label="Link">
        <input type="text" value={form.link} onChange={e => set("link", e.target.value)} className={inputCls} />
      </Field>
      <FormFooter onCancel={onCancel} saveLabel="Save Team" />
    </form>
  );
}

function PartnerForm({
  initial, onSave, onCancel,
}: {
  initial: Partial<Partner>;
  onSave: (form: Omit<Partner, "id" | "created_at">) => Promise<void>;
  onCancel: () => void;
}) {
  const [form, setForm] = useState<Omit<Partner, "id" | "created_at">>({
    name: initial.name ?? "",
    logo_url: initial.logo_url ?? "",
  });
  const set = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form); }} className="p-8 space-y-6">
      <Field label="Partner Name">
        <input type="text" value={form.name} onChange={e => set("name", e.target.value)} className={inputCls} required />
      </Field>
      <ImageUploadField
        label="Partner Logo"
        value={form.logo_url}
        onChange={url => set("logo_url", url)}
        bucket="partner-logos"
      />
      <FormFooter onCancel={onCancel} saveLabel="Save Partner" />
    </form>
  );
}