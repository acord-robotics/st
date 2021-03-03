from app import app, db
# from app.models import User, Post -> From github.com/signal-k/elearning. We don't have a user database yet because there is no need for user login or registration, so at the moment it's just routing

@app.shell_context_processor
def make_shell_context()
    pass