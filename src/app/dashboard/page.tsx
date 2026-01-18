"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabase";
import LogoutButton from "./LogoutButton";

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

/* ---------- DASHBOARD ---------- */

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [contents, setContents] = useState<Content[]>([]);
  const [events, setEvents] = useState<Event[]>([]);

  const [editingContent, setEditingContent] = useState<Content | null>(null);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const [contentForm, setContentForm] = useState<
    Omit<Content, "id" | "created_at">
  >({
    img_head: "",
    head: "",
    detail: "",
    word: "",
    author: "",
  });

  const [eventForm, setEventForm] = useState<Omit<Event, "id" | "created_at">>({
    status: "",
    name_th: "",
    name_en: "",
    link: "",
    text_th: "",
    text_en: "",
    image: "",
    year: "",
  });

  /* ---------- AUTH ---------- */

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push("/login");
      else {
        setUser(data.session.user);
        setLoading(false);
      }
    });
  }, [router]);

  /* ---------- FETCH DATA ---------- */

  useEffect(() => {
    if (!user) return;

    supabase
      .from("contents")
      .select("*")
      .order("id")
      .then(({ data }) => {
        if (data) setContents(data);
      });

    supabase
      .from("events")
      .select("*")
      .order("id")
      .then(({ data }) => {
        if (data) setEvents(data);
      });
  }, [user]);

  /* ---------- CONTENTS HANDLERS ---------- */

  function startAddContent() {
    setEditingContent(null);
    setContentForm({
      img_head: "",
      head: "",
      detail: "",
      word: "",
      author: "",
    });
  }

  function startEditContent(item: Content) {
    setEditingContent(item);
    const { id, created_at, ...rest } = item;
    setContentForm(rest);
  }

  async function saveContent() {
    if (!contentForm.head) return alert("head is required");

    if (editingContent) {
      await supabase
        .from("contents")
        .update(contentForm)
        .eq("id", editingContent.id);

      setContents((prev) =>
        prev.map((i) =>
          i.id === editingContent.id ? { ...i, ...contentForm } : i
        )
      );
    } else {
      const { data } = await supabase
        .from("contents")
        .insert(contentForm)
        .select()
        .single();

      if (data) setContents((prev) => [...prev, data]);
    }

    startAddContent();
  }

  async function deleteContent(id: number) {
    if (!confirm("ลบ content นี้?")) return;
    await supabase.from("contents").delete().eq("id", id);
    setContents((prev) => prev.filter((i) => i.id !== id));
  }

  /* ---------- EVENTS HANDLERS ---------- */

  function startAddEvent() {
    setEditingEvent(null);
    setEventForm({
      status: "",
      name_th: "",
      name_en: "",
      link: "",
      text_th: "",
      text_en: "",
      image: "",
      year: "",
    });
  }

  function startEditEvent(item: Event) {
    setEditingEvent(item);
    const { id, created_at, ...rest } = item;
    setEventForm(rest);
  }

  async function saveEvent() {
    if (!eventForm.name_th || !eventForm.name_en || !eventForm.year)
      return alert("required fields missing");

    if (editingEvent) {
      await supabase.from("events").update(eventForm).eq("id", editingEvent.id);

      setEvents((prev) =>
        prev.map((i) => (i.id === editingEvent.id ? { ...i, ...eventForm } : i))
      );
    } else {
      const { data } = await supabase
        .from("events")
        .insert(eventForm)
        .select()
        .single();

      if (data) setEvents((prev) => [...prev, data]);
    }

    startAddEvent();
  }

  async function deleteEvent(id: number) {
    if (!confirm("ลบ event นี้?")) return;
    await supabase.from("events").delete().eq("id", id);
    setEvents((prev) => prev.filter((i) => i.id !== id));
  }

  if (!user || loading) return <div>Loading...</div>;

  /* ---------- COLUMNS (DYNAMIC) ---------- */

  const contentCols = contents.length
    ? Object.keys(contents[0]).filter((k) => k !== "created_at")
    : [];

  const eventCols = events.length
    ? Object.keys(events[0]).filter((k) => k !== "created_at")
    : [];

  return (
    <div className="p-6 space-y-10">
      <div className="flex justify-between">
        <h1>Welcome, {user.email}</h1>
        <LogoutButton />
      </div>

      {/* ================= CONTENTS ================= */}
      <section>
        <h2 className="text-xl font-bold mb-3">Contents</h2>

        <table className="w-full border text-sm mb-4">
          <thead className="bg-gray-100">
            <tr>
              {contentCols.map((c) => (
                <th key={c} className="border p-2 capitalize">
                  {c}
                </th>
              ))}
              <th className="border p-2 w-32">Action</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((row) => (
              <tr key={row.id}>
                {contentCols.map((c) => (
                  <td key={c} className="border p-2">
                    {String((row as any)[c] ?? "")}
                  </td>
                ))}
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => startEditContent(row)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteContent(row.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Content Form */}
        <FormBlock
          title={editingContent ? "Edit Content" : "Add Content"}
          form={contentForm}
          setForm={setContentForm}
          onSave={saveContent}
          onCancel={editingContent ? startAddContent : undefined}
        />
      </section>

      {/* ================= EVENTS ================= */}
      <section>
        <h2 className="text-xl font-bold mb-3">Events</h2>

        <table className="w-full border text-sm mb-4">
          <thead className="bg-gray-100">
            <tr>
              {eventCols.map((c) => (
                <th key={c} className="border p-2 capitalize">
                  {c}
                </th>
              ))}
              <th className="border p-2 w-32">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((row) => (
              <tr key={row.id}>
                {eventCols.map((c) => (
                  <td key={c} className="border p-2">
                    {String((row as any)[c] ?? "")}
                  </td>
                ))}
                <td className="border p-2 text-center space-x-2">
                  <button
                    onClick={() => startEditEvent(row)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(row.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Event Form */}
        <FormBlock
          title={editingEvent ? "Edit Event" : "Add Event"}
          form={eventForm}
          setForm={setEventForm}
          onSave={saveEvent}
          onCancel={editingEvent ? startAddEvent : undefined}
        />
      </section>
    </div>
  );
}

/* ---------- GENERIC FORM BLOCK ---------- */

function FormBlock({
  title,
  form,
  setForm,
  onSave,
  onCancel,
}: {
  title: string;
  form: Record<string, any>;
  setForm: (f: any) => void;
  onSave: () => void;
  onCancel?: () => void;
}) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-3">{title}</h3>

      {Object.keys(form).map((key) => (
        <div key={key} className="mb-2">
          {key.startsWith("text") ? (
            <textarea
              className="border p-2 w-full"
              placeholder={key}
              value={form[key] ?? ""}
              onChange={(e) =>
                setForm((f: any) => ({ ...f, [key]: e.target.value }))
              }
            />
          ) : (
            <input
              className="border p-2 w-full"
              placeholder={key}
              value={form[key] ?? ""}
              onChange={(e) =>
                setForm((f: any) => ({ ...f, [key]: e.target.value }))
              }
            />
          )}
        </div>
      ))}

      <div className="flex gap-2 mt-3">
        <button
          onClick={onSave}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Save
        </button>
        {onCancel && (
          <button onClick={onCancel} className="border px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
