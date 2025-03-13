"""Add snapshots tables

Revision ID: 52633db2dae9
Revises: 658924a376dd
Create Date: 2024-06-26 16:29:18.652960

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "52633db2dae9"
down_revision: Union[str, None] = "658924a376dd"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "snapshots",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("organization_id", sa.String(), nullable=True),
        sa.Column("conversation_id", sa.String(), nullable=False),
        sa.Column("last_message_id", sa.String(), nullable=False),
        sa.Column("version", sa.Integer(), nullable=False),
        sa.Column("snapshot", sa.JSON(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(
            ["conversation_id"], ["conversations.id"], ondelete="CASCADE"
        ),
        sa.ForeignKeyConstraint(
            ["last_message_id"], ["messages.id"], ondelete="CASCADE"
        ),
        sa.ForeignKeyConstraint(
            ["organization_id"],
            ["organizations.id"],
            name="conversations_organization_id_fkey",
            ondelete="CASCADE",
        ),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        "snapshot_conversation_id", "snapshots", ["conversation_id"], unique=False
    )
    op.create_index(
        "snapshot_last_message_id", "snapshots", ["last_message_id"], unique=False
    )
    op.create_index("snapshot_user_id", "snapshots", ["user_id"], unique=False)
    op.create_table(
        "snapshot_links",
        sa.Column("snapshot_id", sa.String(), nullable=False),
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(["snapshot_id"], ["snapshots.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        "snapshot_link_snapshot_id", "snapshot_links", ["snapshot_id"], unique=False
    )
    op.create_table(
        "snapshot_access",
        sa.Column("user_id", sa.String(), nullable=False),
        sa.Column("snapshot_id", sa.String(), nullable=False),
        sa.Column("link_id", sa.String(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.ForeignKeyConstraint(["link_id"], ["snapshot_links.id"], ondelete="CASCADE"),
        sa.ForeignKeyConstraint(["snapshot_id"], ["snapshots.id"], ondelete="CASCADE"),
        sa.PrimaryKeyConstraint("id"),
    )
    op.create_index(
        "snapshot_access_link_id", "snapshot_access", ["link_id"], unique=False
    )
    op.create_index(
        "snapshot_access_user_id", "snapshot_access", ["user_id"], unique=False
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index("snapshot_access_user_id", table_name="snapshot_access")
    op.drop_index("snapshot_access_link_id", table_name="snapshot_access")
    op.drop_table("snapshot_access")
    op.drop_index("snapshot_link_snapshot_id", table_name="snapshot_links")
    op.drop_table("snapshot_links")
    op.drop_index("snapshot_user_id", table_name="snapshots")
    op.drop_index("snapshot_last_message_id", table_name="snapshots")
    op.drop_index("snapshot_conversation_id", table_name="snapshots")
    op.drop_table("snapshots")
    # ### end Alembic commands ###
