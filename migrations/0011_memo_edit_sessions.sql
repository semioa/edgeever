CREATE TABLE memo_edit_sessions (
  id TEXT PRIMARY KEY,
  memo_id TEXT NOT NULL,
  actor_type TEXT NOT NULL CHECK (actor_type IN ('user', 'agent')),
  actor_id TEXT,
  base_revision INTEGER NOT NULL,
  base_content_hash TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  FOREIGN KEY (memo_id) REFERENCES memos(id) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE INDEX idx_memo_edit_sessions_memo
  ON memo_edit_sessions(memo_id, expires_at);

CREATE INDEX idx_memo_edit_sessions_expiry
  ON memo_edit_sessions(expires_at);
